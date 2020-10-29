/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IBiologicallyDerivedProductCollection,
  Period,
  PrimitiveDateTime,
  Reference,
  FieldMetadata
} from "../internal";

export class BiologicallyDerivedProductCollection extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProduct.Collection";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "collector",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "source",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "collected",
      fieldType: [PrimitiveDateTime, Period],
      isArray: false
    }];
  }

  public collector?: Reference;

  public source?: Reference;

  public collected?: PrimitiveDateTime | Period;

  public static parse(
    json: IBiologicallyDerivedProductCollection,
    providedInstance: BiologicallyDerivedProductCollection = new BiologicallyDerivedProductCollection()
  ): BiologicallyDerivedProductCollection {
    const newInstance: BiologicallyDerivedProductCollection = BackboneElement.parse(json, providedInstance);
  
    if (json.collector !== undefined) {
      newInstance.collector = Reference.parse(json.collector);
    }
    if (json.source !== undefined) {
      newInstance.source = Reference.parse(json.source);
    }
    if (json.collectedDateTime !== undefined) {
      newInstance.collected = PrimitiveDateTime.parsePrimitive(json.collectedDateTime, json._collectedDateTime);
    }
    if (json.collectedPeriod !== undefined) {
      newInstance.collected = Period.parse(json.collectedPeriod);
    }
    return newInstance;
  }

  public static isBiologicallyDerivedProductCollection(input?: unknown): input is BiologicallyDerivedProductCollection {
    const castInput = input as BiologicallyDerivedProductCollection;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BiologicallyDerivedProductCollection";
  }

  public toJSON(): IBiologicallyDerivedProductCollection {
    const result: IBiologicallyDerivedProductCollection = super.toJSON();

    if (this.collector) {
      result.collector = this.collector.toJSON();
    }

    if (this.source) {
      result.source = this.source.toJSON();
    }

    if (this.collected && PrimitiveDateTime.isPrimitiveDateTime(this.collected)) {
      result.collectedDateTime = this.collected.value;
      result._collectedDateTime = Extension.serializePrimitiveExtension(this.collected);
    }

    if (this.collected && Period.isPeriod(this.collected)) {
      result.collectedPeriod = this.collected.toJSON();
    }

    return result;
  }

  public clone(): BiologicallyDerivedProductCollection {
    return BiologicallyDerivedProductCollection.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BiologicallyDerivedProductCollection";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
