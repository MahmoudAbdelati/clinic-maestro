import { Injectable } from '@nestjs/common';
import { egyptianMobileSchema } from '@clinic/shared';

// Temporary Day 5 sample: proves the api can import @clinic/shared.
// Replaced by real modules (health, auth…) in later days.
@Injectable()
export class AppService {
  getHello(): string {
    const sample = egyptianMobileSchema.parse('010 1234 5678');
    return `Clinic Maestro API. Shared schema check: ${sample}`;
  }
}
