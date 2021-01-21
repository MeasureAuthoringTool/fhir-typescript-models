/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IImmunizationReaction,
  PrimitiveBoolean,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("ImmunizationReaction", "BackboneElement")
export class ImmunizationReaction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Immunization.Reaction";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveDateTime")
  public date?: PrimitiveDateTime;

  @FhirField("Reference")
  public detail?: Reference;

  @FhirField("PrimitiveBoolean")
  public reported?: PrimitiveBoolean;

  public static parse(
    json: IImmunizationReaction,
    providedInstance: ImmunizationReaction = new ImmunizationReaction()
  ): ImmunizationReaction {
    const newInstance: ImmunizationReaction = BackboneElement.parse(json, providedInstance);
  
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.detail !== undefined) {
      newInstance.detail = Reference.parse(json.detail);
    }
    if (json.reported !== undefined) {
      newInstance.reported = PrimitiveBoolean.parsePrimitive(json.reported, json._reported);
    }
    return newInstance;
  }

  public static isImmunizationReaction(input?: unknown): input is ImmunizationReaction {
    const castInput = input as ImmunizationReaction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationReaction";
  }

  public toJSON(): IImmunizationReaction {
    const result: IImmunizationReaction = super.toJSON();

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.detail) {
      result.detail = this.detail.toJSON();
    }

    if (this.reported) {
      result.reported = this.reported.value;
      result._reported = Extension.serializePrimitiveExtension(this.reported);
    }

    return result;
  }

  public clone(): ImmunizationReaction {
    return ImmunizationReaction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImmunizationReaction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
