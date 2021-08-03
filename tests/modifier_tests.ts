// [VexFlow](http://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
// MIT License

import { Modifier } from 'modifier';
import { ModifierContext } from 'modifiercontext';

/**
 * ModifierContext Tests
 */
const ModifierContextTests = {
  Start(): void {
    QUnit.module('ModifierContext');
    test('Modifier Width Test', this.width);
    test('Modifier Management', this.management);
  },

  width(): void {
    const mc = new ModifierContext();
    equal(mc.getWidth(), 0, 'New modifier context has no width');
  },

  management(): void {
    const mc = new ModifierContext();
    const modifier1 = new Modifier();
    const modifier2 = new Modifier();

    mc.addMember(modifier1);
    mc.addMember(modifier2);

    const modifiers = mc.getMembers(Modifier.CATEGORY);
    equal(modifiers.length, 2, 'Added two modifiers');
  },
};

export { ModifierContextTests };
