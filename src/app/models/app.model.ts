import { BaseEntity } from './base-entity';

export class App implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public AppUsers?: BaseEntity[],
    ) {
    }
}
