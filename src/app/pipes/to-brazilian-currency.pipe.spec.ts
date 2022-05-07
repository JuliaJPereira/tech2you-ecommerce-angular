import { ToBrazilianCurrencyPipe } from './to-brazilian-currency.pipe';

describe('ToBrazilianCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new ToBrazilianCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
