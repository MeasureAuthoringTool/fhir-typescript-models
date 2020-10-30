/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Duration,
  Extension,
  ISpecimenCollection,
  Period,
  PrimitiveDateTime,
  Reference,
  SimpleQuantity,
  FieldMetadata
} from "../internal";

export class SpecimenCollection extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Specimen.Collection";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "collector",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "collected",
      fieldType: [PrimitiveDateTime, Period],
      isArray: false
    }, {
      fieldName: "duration",
      fieldType: [Duration],
      isArray: false
    }, {
      fieldName: "quantity",
      fieldType: [SimpleQuantity],
      isArray: false
    }, {
      fieldName: "method",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "bodySite",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "fastingStatus",
      fieldType: [CodeableConcept, Duration],
      isArray: false
    }];
  }

  public collector?: Reference;

  public collected?: PrimitiveDateTime | Period;

  public duration?: Duration;

  public quantity?: SimpleQuantity;

  public method?: CodeableConcept;

  public bodySite?: CodeableConcept;

  public fastingStatus?: CodeableConcept | Duration;

  public static parse(
    json: ISpecimenCollection,
    providedInstance: SpecimenCollection = new SpecimenCollection()
  ): SpecimenCollection {
    const newInstance: SpecimenCollection = BackboneElement.parse(json, providedInstance);
  
    if (json.collector !== undefined) {
      newInstance.collector = Reference.parse(json.collector);
    }
    if (json.collectedDateTime !== undefined) {
      newInstance.collected = PrimitiveDateTime.parsePrimitive(json.collectedDateTime, json._collectedDateTime);
    }
    if (json.collectedPeriod !== undefined) {
      newInstance.collected = Period.parse(json.collectedPeriod);
    }
    if (json.duration !== undefined) {
      newInstance.duration = Duration.parse(json.duration);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.method !== undefined) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    if (json.bodySite !== undefined) {
      newInstance.bodySite = CodeableConcept.parse(json.bodySite);
    }
    if (json.fastingStatusCodeableConcept !== undefined) {
      newInstance.fastingStatus = CodeableConcept.parse(json.fastingStatusCodeableConcept);
    }
    if (json.fastingStatusDuration !== undefined) {
      newInstance.fastingStatus = Duration.parse(json.fastingStatusDuration);
    }
    return newInstance;
  }

  public static isSpecimenCollection(input?: unknown): input is SpecimenCollection {
    const castInput = input as SpecimenCollection;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SpecimenCollection";
  }

  public toJSON(): ISpecimenCollection {
    const result: ISpecimenCollection = super.toJSON();

    if (this.collector) {
      result.collector = this.collector.toJSON();
    }

    if (this.collected && PrimitiveDateTime.isPrimitiveDateTime(this.collected)) {
      result.collectedDateTime = this.collected.value;
      result._collectedDateTime = Extension.serializePrimitiveExtension(this.collected);
    }

    if (this.collected && Period.isPeriod(this.collected)) {
      result.collectedPeriod = this.collected.toJSON();
    }

    if (this.duration) {
      result.duration = this.duration.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.method) {
      result.method = this.method.toJSON();
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.toJSON();
    }

    if (this.fastingStatus && CodeableConcept.isCodeableConcept(this.fastingStatus)) {
      result.fastingStatusCodeableConcept = this.fastingStatus.toJSON();
    }

    if (this.fastingStatus && Duration.isDuration(this.fastingStatus)) {
      result.fastingStatusDuration = this.fastingStatus.toJSON();
    }

    return result;
  }

  public clone(): SpecimenCollection {
    return SpecimenCollection.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SpecimenCollection";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
