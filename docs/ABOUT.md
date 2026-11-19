# Wazko Express — Base de conocimiento

Documento de contexto completo sobre Wazko Express. Sirve para dos propósitos:
1. Alimentar a tu asistente de IA (base de conocimiento / "system prompt").
2. Dar contexto a cualquier IA, desarrollador o colaborador sobre el producto.

---

## 1. Qué es Wazko Express

Wazko Express es una **infraestructura de atención y comercio conversacional con
inteligencia artificial para PyMEs en LatAm**. Funciona sobre WhatsApp y permite
a cualquier negocio ofrecer un asistente que:

- Atiende a cientos de clientes al mismo tiempo, 24/7.
- Guía al cliente en dudas, consultas y quejas en lenguaje natural.
- Recibe archivos (fotos, PDF, capturas, comprobantes de pago).
- Interpreta esos archivos con IA y decide el siguiente paso.
- Registra cada interacción como un "caso" en un panel central.

**Propuesta de valor en una frase:** convierte la atención por WhatsApp en una
operación ordenada y automática, sin perder clientes en horas pico y a menos de
un cuarto del costo de contratar un agente de soporte adicional.

## 2. Para quién es

Dueños de PyMEs y comercios en LatAm (Colombia, Perú, México y más) que:
- Reciben muchos mensajes de WhatsApp y no alcanzan a responder a tiempo.
- Pierden ventas o clientes por demoras en horas pico.
- Gastan tiempo del equipo revisando comprobantes y pantallazos manualmente.
- Quieren profesionalizar su atención sin montar un call center.

## 3. Mercados y realidad local (LatAm)

El asistente está diseñado para la realidad de la región:
- Entiende **direcciones informales** ("al lado de la tienda", "casa de rejas verdes").
- Reconoce **medios de pago locales**: transferencias bancarias, billeteras
  digitales (Nequi, Daviplata, Yape, Plin, etc.), y pago contraentrega.
- Procesa el **lenguaje natural** y los modismos de los clientes.

## 4. Capacidades del asistente

### 4.1 Atención conversacional
- Respuestas inmediatas, consistentes, en tono configurable por el negocio.
- Manejo simultáneo de muchas conversaciones.

### 4.2 Recepción e interpretación de archivos
- El cliente adjunta fotos, PDF o capturas en el chat.
- La IA lee el contenido: por ejemplo, de un comprobante extrae monto, fecha y
  referencia; de una foto de producto identifica el problema reportado.
- Con esa información decide: validar un pago, escalar una queja, generar un caso.

### 4.3 Gestión de casos (panel)
- Cada conversación relevante se convierte en un "caso" con ID, estado, historial
  y archivos adjuntos.
- Estados típicos: nuevo, en proceso, resuelto, escalado, pagado.

## 5. Cómo se activa (modelo self-service)

1. **Subir información del negocio**: catálogo o lista de productos, políticas,
   respuestas frecuentes, zonas y tarifas de envío. Formatos: PDF, texto o
   formulario rápido.
2. **Conectar WhatsApp**: la conexión se verifica con **Meta y su API oficial**.
   El negocio usa su propio número y marca.
3. **Operar en piloto automático**: el asistente responde, interpreta archivos,
   resuelve y envía cada caso al panel.

No requiere instaladores, visitas técnicas ni conocimientos de programación.

## 6. Diferenciales frente a un bot genérico

- **Diseñado para LatAm** (direcciones, pagos y lenguaje locales).
- **Inteligencia de datos**: guarda historial de consumo/consultas, productos o
  motivos de queja más frecuentes, y horarios pico, para mejores decisiones.
- **Estabilidad en horas pico**: arquitectura en la nube pensada para soportar
  picos de tráfico sin colapsar ni dejar casos a medias.

## 7. Planes y precios

| Plan | Precio | Para quién | Incluye |
|------|--------|-----------|---------|
| Inicial | 49 USD/mes | Negocios en crecimiento | Asistente de dudas y quejas, recepción e interpretación de archivos, panel de gestión |
| Pro (más popular) | 89 USD/mes | Comercios de alto tráfico | Conversaciones simultáneas extendidas, interpretación avanzada de documentos, analítica de datos |

- Sin contratos de permanencia. Se puede cancelar en cualquier momento.
- Referencia de valor: cuesta menos de un cuarto de un salario mínimo.

## 8. Métricas de impacto (mensajes de marketing)

- 0 minutos de espera para los clientes.
- +30% de consultas resueltas sin intervención humana.
- Menos del 25% del costo de un agente de soporte adicional.

## 9. Producto futuro: Wazko Xuper

API para que desarrolladores integren la inteligencia conversacional de Wazko
directamente en sus propias plataformas web. Actualmente en lista de espera.

## 10. Datos de contacto y marca

- **Sitio web**: https://wazcoexpress.com
- **Correo**: wazco@wazcoexpress.com
- **WhatsApp**: +57 320 927 1860
- **Fundador y CEO**: Danilo Agreda — Instagram @daniloagreda
- **Identidad**: marca tecnológica, moderna, confiable; estética 3D futurista
  oscura; colores de marca verde/teal, azul, violeta y acento naranja.

## 11. Tono de voz sugerido para el asistente

- Cercano, claro y resolutivo. Trata de "tú".
- Confirma lo que entendió antes de actuar ("Identifiqué… ¿quieres X o Y?").
- Nunca inventa datos; si falta información, la pide.
- Cierra siempre dejando claro el siguiente paso y el estado del caso.
