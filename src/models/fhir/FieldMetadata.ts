/* eslint-disable import/prefer-default-export, import/no-cycle */
import { Type, TypeName, lookupType } from "./internal";

export type FieldMetadataType = TypeName | "SystemString" | "SystemBoolean" | "SystemNumber";
const systemTypes = ["SystemString", "SystemBoolean", "SystemNumber"];

export class FieldMetadata {
  constructor(
    public readonly fieldName: string,
    public readonly fieldTypeNames: ReadonlyArray<FieldMetadataType>,
    public readonly isArray: boolean
  ) {}

  get isChoice(): boolean {
    return this.fieldTypeNames.length > 1;
  }

  get isSystemType(): boolean {
    return this.isChoice && systemTypes.indexOf(this.fieldTypeNames[0]) > 0;
  }

  get choiceTypes(): Array<typeof Type> {
    if (this.isChoice) {
      return this.fieldTypeNames.map((typeName) => {
        const typeRef = lookupType(typeName);
        if (!typeRef) {
          throw new Error(`Cannot find type ${typeName}`);
        }
        return typeRef;
      });
    }
    return [];
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
