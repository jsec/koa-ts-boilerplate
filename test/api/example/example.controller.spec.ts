import { R } from '@mobily/ts-belt';
import { ExampleController } from '../../../src/api/example/example.controller';
import { Container, expect } from '../../harness';

describe('Example Controller', () => {
  const controller = Container.get(ExampleController);

  describe('getAll', () => {
    it('should return a value from the service', async () => {
      const result = await controller.getAll();

      expect(R.getExn(result)).to.deep.equal([{ id: 1, value: 'value' }]);
    });
  });

  describe('getById', () => {
    it('should return a single value from the service', async () => {
      const result = await controller.getById(1);

      expect(R.getExn(result)).to.deep.equal({ id: 1, value: 'value' });
    });
  });
});
