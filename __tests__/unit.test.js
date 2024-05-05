// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//// isPhoneNumber() Tests ////
test("phone# expects true 1/2", () => {
  expect(isPhoneNumber("(858) 736-4232")).toBe(true);
});

test("phone# expects false 1/2", () => {
  expect(isPhoneNumber("858-736-42")).toBe(false);
});

test("phone# expects true 2/2", () => {
  expect(isPhoneNumber("858-736-4232")).toBe(true);
});

test("phone# expects false 2/2", () => {
  expect(isPhoneNumber("666")).toBe(false);
});



//// isEmail() Tests ////
test("email expects true 1/2", () => {
  expect(isEmail("a4lane@ucsd.edu")).toBe(true);
});

test("email expects false 1/2", () => {
  expect(isEmail("a4lane.edu")).toBe(false);
});

test("email expects true 2/2", () => {
  expect(isEmail("johndoe@idk.bs")).toBe(true);
});

test("email expects false 2/2", () => {
  expect(isEmail("a4lane@.education")).toBe(false);
});



//// isStrongPassword() Tests ////
test("strong password expects true 1/2", () => {
  expect(isStrongPassword("aaaa")).toBe(true);
});

test("strong password expects false 1/2", () => {
  expect(isStrongPassword("3absh46")).toBe(false);
});

test("strong password expects true 2/2", () => {
  expect(isStrongPassword("j_2_345g_h")).toBe(true);
});

test("strong password expects false 2/2", () => {
  expect(isStrongPassword("a_dkk34_fnnefn_378rhf83")).toBe(false);
});



//// isDate() Tests ////
test("date expects true 1/2", () => {
  expect(isDate("00/00/0000")).toBe(true);
});

test("date expects false 1/2", () => {
  expect(isDate("12.14.2024")).toBe(false);
});

test("date expects true 2/2", () => {
  expect(isDate("10/3/2000")).toBe(true);
});

test("date expects false 2/2", () => {
  expect(isDate("5/3/24")).toBe(false);
});



//// isHexColor() Tests ////
test("hex color expects true 1/2", () => {
  expect(isHexColor("#Be1")).toBe(true);
});

test("hex color expects false 1/2", () => {
  expect(isHexColor("#He5")).toBe(false);
});

test("hex color expects true 2/2", () => {
  expect(isHexColor("#Af3De9")).toBe(true);
});

test("hex color expects false 2/2", () => {
  expect(isHexColor("#Aa1#")).toBe(false);
});