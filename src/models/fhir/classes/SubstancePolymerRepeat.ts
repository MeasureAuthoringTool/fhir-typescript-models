/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstancePolymerRepeat,
  PrimitiveInteger,
  PrimitiveString,
  SubstancePolymerRepeatRepeatUnit,
} from "../internal";

export class SubstancePolymerRepeat extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstancePolymer.Repeat";

  public numberOfUnits?: PrimitiveInteger;

  public averageMolecularFormula?: PrimitiveString;

  public repeatUnitAmountType?: CodeableConcept;

  public repeatUnit?: Array<SubstancePolymerRepeatRepeatUnit>;

  public static parse(
    json: ISubstancePolymerRepeat,
    providedInstance: SubstancePolymerRepeat = new SubstancePolymerRepeat()
  ): SubstancePolymerRepeat {
    const newInstance: SubstancePolymerRepeat = BackboneElement.parse(json, providedInstance);
  
    if (json.numberOfUnits) {
      newInstance.numberOfUnits = PrimitiveInteger.parsePrimitive(json.numberOfUnits, json._numberOfUnits);
    }
    if (json.averageMolecularFormula) {
      newInstance.averageMolecularFormula = PrimitiveString.parsePrimitive(json.averageMolecularFormula, json._averageMolecularFormula);
    }
    if (json.repeatUnitAmountType) {
      newInstance.repeatUnitAmountType = CodeableConcept.parse(json.repeatUnitAmountType);
    }
    if (json.repeatUnit) {
      newInstance.repeatUnit = json.repeatUnit.map((x) => SubstancePolymerRepeatRepeatUnit.parse(x));
    }
    return newInstance;
  }

  public static isSubstancePolymerRepeat(input?: unknown): input is SubstancePolymerRepeat {
    const castInput = input as SubstancePolymerRepeat;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstancePolymerRepeat";
  }

  public toJSON(): ISubstancePolymerRepeat {
    const result: ISubstancePolymerRepeat = super.toJSON();

    if (this.numberOfUnits) {
      result.numberOfUnits = this.numberOfUnits.value;
      result._numberOfUnits = Extension.serializePrimitiveExtension(this.numberOfUnits);
    }

    if (this.averageMolecularFormula) {
      result.averageMolecularFormula = this.averageMolecularFormula.value;
      result._averageMolecularFormula = Extension.serializePrimitiveExtension(this.averageMolecularFormula);
    }

    if (this.repeatUnitAmountType) {
      result.repeatUnitAmountType = this.repeatUnitAmountType.toJSON();
    }

    if (this.repeatUnit) {
      result.repeatUnit = this.repeatUnit.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SubstancePolymerRepeat";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
