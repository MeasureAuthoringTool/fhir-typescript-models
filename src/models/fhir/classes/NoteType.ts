/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("NoteType", "PrimitiveCode")
export class NoteType extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NoteType";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: NoteType = new NoteType()
  ): NoteType {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isNoteType(input?: unknown): input is NoteType {
    const castInput = input as NoteType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NoteType";
  }

  public clone(): NoteType {
    const result = new NoteType();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "NoteType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
