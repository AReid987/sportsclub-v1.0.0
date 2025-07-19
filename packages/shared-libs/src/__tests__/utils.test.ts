import { formatCurrency, formatPercentage, formatOdds, validateEmail, validatePassword } from '../utils';

describe('Format Utils', () => {
  describe('formatCurrency', () => {
    it('should format currency correctly', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
      expect(formatCurrency(0)).toBe('$0.00');
      expect(formatCurrency(1000000)).toBe('$1,000,000.00');
    });

    it('should handle different currencies', () => {
      expect(formatCurrency(100, 'EUR')).toBe('€100.00');
      expect(formatCurrency(100, 'GBP')).toBe('£100.00');
    });
  });

  describe('formatPercentage', () => {
    it('should format percentage correctly', () => {
      expect(formatPercentage(0.1234)).toBe('12.3%');
      expect(formatPercentage(0.5)).toBe('50.0%');
      expect(formatPercentage(1)).toBe('100.0%');
    });

    it('should handle custom decimal places', () => {
      expect(formatPercentage(0.1234, 2)).toBe('12.34%');
      expect(formatPercentage(0.1234, 0)).toBe('12%');
    });
  });

  describe('formatOdds', () => {
    it('should format positive odds correctly', () => {
      expect(formatOdds(2.5)).toBe('+150');
      expect(formatOdds(3.0)).toBe('+200');
    });

    it('should format negative odds correctly', () => {
      expect(formatOdds(1.5)).toBe('-200');
      expect(formatOdds(1.8)).toBe('-125');
    });
  });
});

describe('Validation Utils', () => {
  describe('validateEmail', () => {
    it('should validate correct emails', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    it('should reject invalid emails', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    it('should validate strong passwords', () => {
      expect(validatePassword('StrongPass123')).toBe(true);
      expect(validatePassword('MySecure1Pass')).toBe(true);
    });

    it('should reject weak passwords', () => {
      expect(validatePassword('weak')).toBe(false);
      expect(validatePassword('nouppercaseornumber')).toBe(false);
      expect(validatePassword('NOLOWERCASE123')).toBe(false);
      expect(validatePassword('NoNumber')).toBe(false);
    });
  });
});
