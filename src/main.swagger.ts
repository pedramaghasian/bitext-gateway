import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// Local Utilities
export async function setupSwagger(app: any, prefix: string) {
  try {
    const title = 'Pooleno Panel : OpenAPI documentation';
    const description = 'separated service description';
    const swaggerPath = `${prefix}`;
    const options = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion('v1.1.1')
      .setContact('pooleno team', null, 'pooleno@bitex.app')
      .addBearerAuth()
      .addTag('Orders', 'Order Service')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(swaggerPath, app, document);
  } catch (e) {
    throw e;
  }
}
