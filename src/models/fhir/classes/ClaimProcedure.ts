/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IClaimProcedure,
  PrimitiveDateTime,
  PrimitivePositiveInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("ClaimProcedure", "BackboneElement")
export class ClaimProcedure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.Procedure";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public sequence?: PrimitivePositiveInt;

  @FhirList("CodeableConcept")
  public type?: Array<CodeableConcept>;

  @FhirField("PrimitiveDateTime")
  public date?: PrimitiveDateTime;

  @FhirChoice("CodeableConcept", "Reference")
  public procedure?: CodeableConcept | Reference;

  @FhirList("Reference")
  public udi?: Array<Reference>;

  public static parse(
    json: IClaimProcedure,
    providedInstance: ClaimProcedure = new ClaimProcedure()
  ): ClaimProcedure {
    const newInstance: ClaimProcedure = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.procedureCodeableConcept !== undefined) {
      newInstance.procedure = CodeableConcept.parse(json.procedureCodeableConcept);
    }
    if (json.procedureReference !== undefined) {
      newInstance.procedure = Reference.parse(json.procedureReference);
    }
    if (json.udi !== undefined) {
      newInstance.udi = json.udi.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isClaimProcedure(input?: unknown): input is ClaimProcedure {
    const castInput = input as ClaimProcedure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimProcedure";
  }

  public toJSON(): IClaimProcedure {
    const result: IClaimProcedure = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.procedure && CodeableConcept.isCodeableConcept(this.procedure)) {
      result.procedureCodeableConcept = this.procedure.toJSON();
    }

    if (this.procedure && Reference.isReference(this.procedure)) {
      result.procedureReference = this.procedure.toJSON();
    }

    if (this.udi) {
      result.udi = this.udi.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ClaimProcedure {
    return ClaimProcedure.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimProcedure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
