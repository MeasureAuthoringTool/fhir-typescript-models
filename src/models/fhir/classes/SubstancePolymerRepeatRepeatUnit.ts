/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  ISubstancePolymerRepeatRepeatUnit,
  PrimitiveString,
  SubstanceAmount,
  SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  SubstancePolymerRepeatRepeatUnitStructuralRepresentation,
  FhirType
} from "../internal";

@FhirType("SubstancePolymerRepeatRepeatUnit", "BackboneElement")
export class SubstancePolymerRepeatRepeatUnit extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer.Repeat.RepeatUnit";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public orientationOfPolymerisation?: CodeableConcept;

  @FhirField("PrimitiveString")
  public repeatUnit?: PrimitiveString;

  @FhirField("SubstanceAmount")
  public amount?: SubstanceAmount;

  @FhirList("SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation")
  public degreeOfPolymerisation?: Array<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>;

  @FhirList("SubstancePolymerRepeatRepeatUnitStructuralRepresentation")
  public structuralRepresentation?: Array<SubstancePolymerRepeatRepeatUnitStructuralRepresentation>;

  public static parse(
    json: ISubstancePolymerRepeatRepeatUnit,
    providedInstance: SubstancePolymerRepeatRepeatUnit = new SubstancePolymerRepeatRepeatUnit()
  ): SubstancePolymerRepeatRepeatUnit {
    const newInstance: SubstancePolymerRepeatRepeatUnit = BackboneElement.parse(json, providedInstance);
  
    if (json.orientationOfPolymerisation !== undefined) {
      newInstance.orientationOfPolymerisation = CodeableConcept.parse(json.orientationOfPolymerisation);
    }
    if (json.repeatUnit !== undefined) {
      newInstance.repeatUnit = PrimitiveString.parsePrimitive(json.repeatUnit, json._repeatUnit);
    }
    if (json.amount !== undefined) {
      newInstance.amount = SubstanceAmount.parse(json.amount);
    }
    if (json.degreeOfPolymerisation !== undefined) {
      newInstance.degreeOfPolymerisation = json.degreeOfPolymerisation.map((x) => SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation.parse(x));
    }
    if (json.structuralRepresentation !== undefined) {
      newInstance.structuralRepresentation = json.structuralRepresentation.map((x) => SubstancePolymerRepeatRepeatUnitStructuralRepresentation.parse(x));
    }
    return newInstance;
  }

  public static isSubstancePolymerRepeatRepeatUnit(input?: unknown): input is SubstancePolymerRepeatRepeatUnit {
    const castInput = input as SubstancePolymerRepeatRepeatUnit;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstancePolymerRepeatRepeatUnit";
  }

  public toJSON(): ISubstancePolymerRepeatRepeatUnit {
    const result: ISubstancePolymerRepeatRepeatUnit = super.toJSON();

    if (this.orientationOfPolymerisation) {
      result.orientationOfPolymerisation = this.orientationOfPolymerisation.toJSON();
    }

    if (this.repeatUnit) {
      result.repeatUnit = this.repeatUnit.value;
      result._repeatUnit = Extension.serializePrimitiveExtension(this.repeatUnit);
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    if (this.degreeOfPolymerisation) {
      result.degreeOfPolymerisation = this.degreeOfPolymerisation.map((x) => x.toJSON());
    }

    if (this.structuralRepresentation) {
      result.structuralRepresentation = this.structuralRepresentation.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstancePolymerRepeatRepeatUnit {
    return SubstancePolymerRepeatRepeatUnit.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstancePolymerRepeatRepeatUnit";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
