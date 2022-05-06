import { ExampleController } from '../../../src/api/example/example.controller';
import { container, expect } from '../../harness';

describe('Example Controller', () => {
  const controller = container.resolve(ExampleController);

  describe('getAll', () => {
    it('should return a value from the service', async () => {
      const result = await controller.getAll();

      expect(result.extract()).to.deep.equal([{ id: 1, value: 'value' }]);
    });
  });

  describe('getById', () => {
    it('should return a single value from the service', async () => {
      const result = await controller.getById(1);

      expect(result.extract()).to.deep.equal({ id: 1, value: 'value' });
    });
  });
});
