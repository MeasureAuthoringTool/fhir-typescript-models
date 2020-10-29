/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMedicationAdministrationDosage,
  PrimitiveString,
  Ratio,
  SimpleQuantity,
  FieldMetadata
} from "../internal";

export class MedicationAdministrationDosage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationAdministration.Dosage";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "text",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "site",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "route",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "method",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "dose",
      fieldType: [SimpleQuantity],
      isArray: false
    }, {
      fieldName: "rate",
      fieldType: [Ratio, SimpleQuantity],
      isArray: false
    }];
  }

  public text?: PrimitiveString;

  public site?: CodeableConcept;

  public route?: CodeableConcept;

  public method?: CodeableConcept;

  public dose?: SimpleQuantity;

  public rate?: Ratio | SimpleQuantity;

  public static parse(
    json: IMedicationAdministrationDosage,
    providedInstance: MedicationAdministrationDosage = new MedicationAdministrationDosage()
  ): MedicationAdministrationDosage {
    const newInstance: MedicationAdministrationDosage = BackboneElement.parse(json, providedInstance);
  
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.site !== undefined) {
      newInstance.site = CodeableConcept.parse(json.site);
    }
    if (json.route !== undefined) {
      newInstance.route = CodeableConcept.parse(json.route);
    }
    if (json.method !== undefined) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    if (json.dose !== undefined) {
      newInstance.dose = SimpleQuantity.parse(json.dose);
    }
    if (json.rateRatio !== undefined) {
      newInstance.rate = Ratio.parse(json.rateRatio);
    }
    if (json.rateSimpleQuantity !== undefined) {
      newInstance.rate = SimpleQuantity.parse(json.rateSimpleQuantity);
    }
    return newInstance;
  }

  public static isMedicationAdministrationDosage(input?: unknown): input is MedicationAdministrationDosage {
    const castInput = input as MedicationAdministrationDosage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationAdministrationDosage";
  }

  public toJSON(): IMedicationAdministrationDosage {
    const result: IMedicationAdministrationDosage = super.toJSON();

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.site) {
      result.site = this.site.toJSON();
    }

    if (this.route) {
      result.route = this.route.toJSON();
    }

    if (this.method) {
      result.method = this.method.toJSON();
    }

    if (this.dose) {
      result.dose = this.dose.toJSON();
    }

    if (this.rate && Ratio.isRatio(this.rate)) {
      result.rateRatio = this.rate.toJSON();
    }

    if (this.rate && SimpleQuantity.isSimpleQuantity(this.rate)) {
      result.rateSimpleQuantity = this.rate.toJSON();
    }

    return result;
  }

  public clone(): MedicationAdministrationDosage {
    return MedicationAdministrationDosage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicationAdministrationDosage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
