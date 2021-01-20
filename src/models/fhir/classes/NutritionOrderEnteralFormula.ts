/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  INutritionOrderEnteralFormula,
  NutritionOrderEnteralFormulaAdministration,
  PrimitiveString,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("NutritionOrderEnteralFormula", "BackboneElement")
export class NutritionOrderEnteralFormula extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritionOrder.EnteralFormula";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public baseFormulaType?: CodeableConcept;

  @FhirField("PrimitiveString")
  public baseFormulaProductName?: PrimitiveString;

  @FhirField("CodeableConcept")
  public additiveType?: CodeableConcept;

  @FhirField("PrimitiveString")
  public additiveProductName?: PrimitiveString;

  @FhirField("SimpleQuantity")
  public caloricDensity?: SimpleQuantity;

  @FhirField("CodeableConcept")
  public routeofAdministration?: CodeableConcept;

  @FhirList("NutritionOrderEnteralFormulaAdministration")
  public administration?: Array<NutritionOrderEnteralFormulaAdministration>;

  @FhirField("SimpleQuantity")
  public maxVolumeToDeliver?: SimpleQuantity;

  @FhirField("PrimitiveString")
  public administrationInstruction?: PrimitiveString;

  public static parse(
    json: INutritionOrderEnteralFormula,
    providedInstance: NutritionOrderEnteralFormula = new NutritionOrderEnteralFormula()
  ): NutritionOrderEnteralFormula {
    const newInstance: NutritionOrderEnteralFormula = BackboneElement.parse(json, providedInstance);
  
    if (json.baseFormulaType !== undefined) {
      newInstance.baseFormulaType = CodeableConcept.parse(json.baseFormulaType);
    }
    if (json.baseFormulaProductName !== undefined) {
      newInstance.baseFormulaProductName = PrimitiveString.parsePrimitive(json.baseFormulaProductName, json._baseFormulaProductName);
    }
    if (json.additiveType !== undefined) {
      newInstance.additiveType = CodeableConcept.parse(json.additiveType);
    }
    if (json.additiveProductName !== undefined) {
      newInstance.additiveProductName = PrimitiveString.parsePrimitive(json.additiveProductName, json._additiveProductName);
    }
    if (json.caloricDensity !== undefined) {
      newInstance.caloricDensity = SimpleQuantity.parse(json.caloricDensity);
    }
    if (json.routeofAdministration !== undefined) {
      newInstance.routeofAdministration = CodeableConcept.parse(json.routeofAdministration);
    }
    if (json.administration !== undefined) {
      newInstance.administration = json.administration.map((x) => NutritionOrderEnteralFormulaAdministration.parse(x));
    }
    if (json.maxVolumeToDeliver !== undefined) {
      newInstance.maxVolumeToDeliver = SimpleQuantity.parse(json.maxVolumeToDeliver);
    }
    if (json.administrationInstruction !== undefined) {
      newInstance.administrationInstruction = PrimitiveString.parsePrimitive(json.administrationInstruction, json._administrationInstruction);
    }
    return newInstance;
  }

  public static isNutritionOrderEnteralFormula(input?: unknown): input is NutritionOrderEnteralFormula {
    const castInput = input as NutritionOrderEnteralFormula;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NutritionOrderEnteralFormula";
  }

  public toJSON(): INutritionOrderEnteralFormula {
    const result: INutritionOrderEnteralFormula = super.toJSON();

    if (this.baseFormulaType) {
      result.baseFormulaType = this.baseFormulaType.toJSON();
    }

    if (this.baseFormulaProductName) {
      result.baseFormulaProductName = this.baseFormulaProductName.value;
      result._baseFormulaProductName = Extension.serializePrimitiveExtension(this.baseFormulaProductName);
    }

    if (this.additiveType) {
      result.additiveType = this.additiveType.toJSON();
    }

    if (this.additiveProductName) {
      result.additiveProductName = this.additiveProductName.value;
      result._additiveProductName = Extension.serializePrimitiveExtension(this.additiveProductName);
    }

    if (this.caloricDensity) {
      result.caloricDensity = this.caloricDensity.toJSON();
    }

    if (this.routeofAdministration) {
      result.routeofAdministration = this.routeofAdministration.toJSON();
    }

    if (this.administration) {
      result.administration = this.administration.map((x) => x.toJSON());
    }

    if (this.maxVolumeToDeliver) {
      result.maxVolumeToDeliver = this.maxVolumeToDeliver.toJSON();
    }

    if (this.administrationInstruction) {
      result.administrationInstruction = this.administrationInstruction.value;
      result._administrationInstruction = Extension.serializePrimitiveExtension(this.administrationInstruction);
    }

    return result;
  }

  public clone(): NutritionOrderEnteralFormula {
    return NutritionOrderEnteralFormula.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "NutritionOrderEnteralFormula";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
