// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Phone number
test('phone-number-first-true', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test('phone-number-second-true', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});
test('phone-number-first-false', () => {
  expect(isPhoneNumber("abc")).toBe(false);
});
test('phone-number-second-false', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

// Email
test('email-first-true', () => {
  expect(isEmail("s7chun@ucsc.edu")).toBe(true);
});
test('email-second-true', () => {
  expect(isEmail("sarahchun66@gmail.com")).toBe(true);
});
test('email-first-false', () => {
  expect(isEmail("abc@stuff.stuff")).toBe(false);
});
test('email-second-false', () => {
  expect(isEmail("1234567890")).toBe(false);
});

// Strong password
test('password-first-true', () => {
  expect(isStrongPassword("asdf__123")).toBe(true);
});
test('password-second-true', () => {
  expect(isStrongPassword("as_321_df")).toBe(true);
});
test('password-first-false', () => {
  expect(isStrongPassword("abc")).toBe(false);
});
test('password-second-false', () => {
  expect(isStrongPassword("1234567890")).toBe(false);
});

// Date Format
test('date-first-true', () => {
  expect(isDate("12/01/2024")).toBe(true);
});
test('date-second-true', () => {
  expect(isDate("02/29/2004")).toBe(true);
});
test('date-first-false', () => {
  expect(isDate("13.32.1988")).toBe(false); //13/32/1988
});
test('date-second-false', () => {
  expect(isDate("13321988")).toBe(false);
});

// Hex Color
test('hex-color-first-true', () => {
  expect(isHexColor("#ABCDEF")).toBe(true);
});
test('hex-color-second-true', () => {
  expect(isHexColor("#fff")).toBe(true);
});
test('hex-color-first-false', () => {
  expect(isHexColor("FFFF")).toBe(false);
});
test('hex-color-second-false', () => {
  expect(isHexColor("#ghijkl")).toBe(false); //ghijkl
});
