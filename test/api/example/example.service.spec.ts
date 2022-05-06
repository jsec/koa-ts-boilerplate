import { ExampleService } from '../../../src/api/example/example.service';
import { container, expect } from '../../harness';

describe('Example Controller', () => {
  const service = container.resolve(ExampleService);

  describe('getAll', () => {
    it('should return a value from the service', async () => {
      const result = await service.getAll();

      expect(result.extract()).to.deep.equal([{ id: 1, value: 'value' }]);
    });
  });

  describe('getById', () => {
    it('should return a single value from the service', async () => {
      const result = await service.getById(1);

      expect(result.extract()).to.deep.equal({ id: 1, value: 'value' });
    });
  });
});
