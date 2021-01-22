/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirChoice,
  FhirField,
  IBiologicallyDerivedProductCollection,
  Period,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("BiologicallyDerivedProductCollection", "BackboneElement")
export class BiologicallyDerivedProductCollection extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProduct.Collection";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public collector?: Reference;

  @FhirField("Reference")
  public source?: Reference;

  @FhirChoice("PrimitiveDateTime", "Period")
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
