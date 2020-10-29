/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  IConsentProvisionActor,
  Reference,
  FieldMetadata
} from "../internal";

export class ConsentProvisionActor extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Consent.Provision.Actor";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "role",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "reference",
      fieldType: [Reference],
      isArray: false
    }];
  }

  public role?: CodeableConcept;

  public reference?: Reference;

  public static parse(
    json: IConsentProvisionActor,
    providedInstance: ConsentProvisionActor = new ConsentProvisionActor()
  ): ConsentProvisionActor {
    const newInstance: ConsentProvisionActor = BackboneElement.parse(json, providedInstance);
  
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.reference !== undefined) {
      newInstance.reference = Reference.parse(json.reference);
    }
    return newInstance;
  }

  public static isConsentProvisionActor(input?: unknown): input is ConsentProvisionActor {
    const castInput = input as ConsentProvisionActor;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConsentProvisionActor";
  }

  public toJSON(): IConsentProvisionActor {
    const result: IConsentProvisionActor = super.toJSON();

    if (this.role) {
      result.role = this.role.toJSON();
    }

    if (this.reference) {
      result.reference = this.reference.toJSON();
    }

    return result;
  }

  public clone(): ConsentProvisionActor {
    return ConsentProvisionActor.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConsentProvisionActor";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
