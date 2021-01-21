/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IExplanationOfBenefitProcedure,
  PrimitiveDateTime,
  PrimitivePositiveInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitProcedure", "BackboneElement")
export class ExplanationOfBenefitProcedure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.Procedure";

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
    json: IExplanationOfBenefitProcedure,
    providedInstance: ExplanationOfBenefitProcedure = new ExplanationOfBenefitProcedure()
  ): ExplanationOfBenefitProcedure {
    const newInstance: ExplanationOfBenefitProcedure = BackboneElement.parse(json, providedInstance);
  
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

  public static isExplanationOfBenefitProcedure(input?: unknown): input is ExplanationOfBenefitProcedure {
    const castInput = input as ExplanationOfBenefitProcedure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitProcedure";
  }

  public toJSON(): IExplanationOfBenefitProcedure {
    const result: IExplanationOfBenefitProcedure = super.toJSON();

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

  public clone(): ExplanationOfBenefitProcedure {
    return ExplanationOfBenefitProcedure.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitProcedure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
