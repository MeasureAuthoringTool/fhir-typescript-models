/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  SubstanceAmount,
  FhirType
} from "../internal";

@FhirType("SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation", "BackboneElement")
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public degree?: CodeableConcept;

  @FhirField("SubstanceAmount")
  public amount?: SubstanceAmount;

  public static parse(
    json: ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
    providedInstance: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation = new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation()
  ): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    const newInstance: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation = BackboneElement.parse(json, providedInstance);
  
    if (json.degree !== undefined) {
      newInstance.degree = CodeableConcept.parse(json.degree);
    }
    if (json.amount !== undefined) {
      newInstance.amount = SubstanceAmount.parse(json.amount);
    }
    return newInstance;
  }

  public static isSubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation(input?: unknown): input is SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    const castInput = input as SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation";
  }

  public toJSON(): ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    const result: ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation = super.toJSON();

    if (this.degree) {
      result.degree = this.degree.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    return result;
  }

  public clone(): SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    return SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
