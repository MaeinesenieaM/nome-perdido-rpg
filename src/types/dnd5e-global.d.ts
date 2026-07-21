import type * as DND5EModule from "dnd5e/dnd5e.mjs";

declare global {
  interface CONFIG {
    DND5E: typeof DND5EModule.DND5E;
  }

  const dnd5e: {
    applications: typeof DND5EModule.applications;
    canvas: typeof DND5EModule.canvas;
    config: typeof DND5EModule.DND5E;
    dataModels: typeof DND5EModule.dataModels;
    dice: typeof DND5EModule.dice;
    documents: typeof DND5EModule.documents;
    enrichers: typeof DND5EModule.enrichers;
    Filter: typeof DND5EModule.Filter;
    inserts: typeof DND5EModule.inserts;
    migrations: typeof DND5EModule.migrations;
    registry: typeof DND5EModule.registry;
    ui: Record<string, unknown>;
    utils: typeof DND5EModule.utils;
  };

  interface UninitializedGame {
    dnd5e: typeof dnd5e;
  }

  interface InitGame {
    dnd5e: typeof dnd5e;
  }

  interface I18nInitGame {
    dnd5e: typeof dnd5e;
  }

  interface SetupGame {
    dnd5e: typeof dnd5e;
  }

  interface ReadyGame {
    dnd5e: typeof dnd5e;
  }
}

export {};