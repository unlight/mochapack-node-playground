import 'reflect-metadata'; // Required for decorators otherwise TypeError: _dec1 is not a function

/**
 * Hello function whithout parameter
 * @returns result string
 */
export function hello(greet?: string): string;

/**
 * This is hello function
 * @returns result string
 */
export function hello(greet = 'Hello') {
  return `${greet} world`;
}

function Injectable() {
  return target => {};
}

@Injectable()
export class ParkService {
  welcome = (): string => 'Welcome to park';
}

@Injectable()
export class ZooController {
  constructor(private readonly service: ParkService) {}
  go(): string {
    return this.service.welcome();
  }
}
