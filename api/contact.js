
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedProjects = [
  "Arquitectura",
  "Interiorismo",
  "Paisajismo",
  "Iluminación",
  "Diseño",
  "Atelier / Talleres",
  "Otro",
];

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      success: false,
      message: "Método no permitido.",
    });
  }

  try {
    const {
      name,
      email,
      project,
      message,
      website,
    } = req.body || {};

    // Protección antispam
    if (typeof website === "string" && website.trim()) {
      return res.status(200).json({ success: true });
    }

    // Validación de tipos
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof project !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Los datos enviados no son válidos.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    // Validación de campos
    if (
      !cleanName ||
      !cleanEmail ||
      !project ||
      !cleanMessage
    ) {
      return res.status(400).json({
        success: false,
        message: "Completá todos los campos.",
      });
    }

    // Límites de caracteres
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanMessage.length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message: "Algunos campos superan el límite permitido.",
      });
    }

    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Ingresá un email válido.",
      });
    }

    // Validación del proyecto
    if (!allowedProjects.includes(project)) {
      return res.status(400).json({
        success: false,
        message: "Seleccioná un tipo de proyecto válido.",
      });
    }

    // Variables de entorno
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.RESEND_FROM_EMAIL
    ) {
      console.error("Faltan variables de entorno de Resend.");

      return res.status(500).json({
        success: false,
        message: "El servicio de contacto no está configurado.",
      });
    }

    // Envío del correo
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: ["lucero.arquitectura1982@gmail.com"],
      replyTo: cleanEmail,
      subject: `Nueva consulta web: ${project}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #292925; max-width: 600px; margin: auto;">
          <h2 style="color: #292925;">
            Nueva consulta desde la web de Lucero
          </h2>

          <hr style="border: 0; border-top: 1px solid #ddd;" />

          <p><strong>Nombre:</strong> ${escapeHtml(cleanName)}</p>

          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>

          <p><strong>Proyecto:</strong> ${escapeHtml(project)}</p>

          <p><strong>Mensaje:</strong></p>

          <div style="background: #f7f5f0; padding: 16px; border-radius: 8px;">
            ${escapeHtml(cleanMessage).replace(/\n/g, "<br>")}
          </div>

          <hr style="border: 0; border-top: 1px solid #ddd; margin-top: 24px;" />

          <small>Mensaje enviado desde el sitio web de Lucero Estudio de Arquitectura.</small>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "No pudimos enviar tu consulta. Intentá nuevamente.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Consulta enviada correctamente.",
    });

  } catch (error) {
    console.error("Contact error:", error);

    return res.status(500).json({
      success: false,
      message: "Ocurrió un error. Intentá nuevamente.",
    });
  }
}
