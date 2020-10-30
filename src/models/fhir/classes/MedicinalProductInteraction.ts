/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  IMedicinalProductInteraction,
  MedicinalProductInteractionInteractant,
  PrimitiveString,
  Reference,
  FieldMetadata
} from "../internal";

export class MedicinalProductInteraction extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProductInteraction";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "interactant",
      fieldType: [MedicinalProductInteractionInteractant],
      isArray: true
    }, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "effect",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "incidence",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "management",
      fieldType: [CodeableConcept],
      isArray: false
    }];
  }

  public subject?: Array<Reference>;

  public description?: PrimitiveString;

  public interactant?: Array<MedicinalProductInteractionInteractant>;

  public type?: CodeableConcept;

  public effect?: CodeableConcept;

  public incidence?: CodeableConcept;

  public management?: CodeableConcept;

  public static parse(
    json: IMedicinalProductInteraction,
    providedInstance: MedicinalProductInteraction = new MedicinalProductInteraction()
  ): MedicinalProductInteraction {
    const newInstance: MedicinalProductInteraction = DomainResource.parse(json, providedInstance);
  
    if (json.subject !== undefined) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.interactant !== undefined) {
      newInstance.interactant = json.interactant.map((x) => MedicinalProductInteractionInteractant.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.effect !== undefined) {
      newInstance.effect = CodeableConcept.parse(json.effect);
    }
    if (json.incidence !== undefined) {
      newInstance.incidence = CodeableConcept.parse(json.incidence);
    }
    if (json.management !== undefined) {
      newInstance.management = CodeableConcept.parse(json.management);
    }
    return newInstance;
  }

  public static isMedicinalProductInteraction(input?: unknown): input is MedicinalProductInteraction {
    const castInput = input as MedicinalProductInteraction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductInteraction";
  }

  public toJSON(): IMedicinalProductInteraction {
    const result: IMedicinalProductInteraction = super.toJSON();

    if (this.subject) {
      result.subject = this.subject.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.interactant) {
      result.interactant = this.interactant.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.effect) {
      result.effect = this.effect.toJSON();
    }

    if (this.incidence) {
      result.incidence = this.incidence.toJSON();
    }

    if (this.management) {
      result.management = this.management.toJSON();
    }

    return result;
  }

  public clone(): MedicinalProductInteraction {
    return MedicinalProductInteraction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductInteraction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
