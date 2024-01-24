import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const requestIdHeader = 'requestId';
    if (!req.headers[requestIdHeader]) {
      const newRequestId = uuidv4();
      req.headers[requestIdHeader] = newRequestId;
    }
    next();
  }
}
