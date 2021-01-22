/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  BiologicallyDerivedProductStorageScale,
  Extension,
  FhirField,
  IBiologicallyDerivedProductStorage,
  Period,
  PrimitiveDecimal,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("BiologicallyDerivedProductStorage", "BackboneElement")
export class BiologicallyDerivedProductStorage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProduct.Storage";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveDecimal")
  public temperature?: PrimitiveDecimal;

  @FhirField("BiologicallyDerivedProductStorageScale")
  public scale?: BiologicallyDerivedProductStorageScale;

  @FhirField("Period")
  public duration?: Period;

  public static parse(
    json: IBiologicallyDerivedProductStorage,
    providedInstance: BiologicallyDerivedProductStorage = new BiologicallyDerivedProductStorage()
  ): BiologicallyDerivedProductStorage {
    const newInstance: BiologicallyDerivedProductStorage = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.temperature !== undefined) {
      newInstance.temperature = PrimitiveDecimal.parsePrimitive(json.temperature, json._temperature);
    }
    if (json.scale !== undefined) {
      newInstance.scale = BiologicallyDerivedProductStorageScale.parsePrimitive(json.scale, json._scale);
    }
    if (json.duration !== undefined) {
      newInstance.duration = Period.parse(json.duration);
    }
    return newInstance;
  }

  public static isBiologicallyDerivedProductStorage(input?: unknown): input is BiologicallyDerivedProductStorage {
    const castInput = input as BiologicallyDerivedProductStorage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BiologicallyDerivedProductStorage";
  }

  public toJSON(): IBiologicallyDerivedProductStorage {
    const result: IBiologicallyDerivedProductStorage = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.temperature) {
      result.temperature = this.temperature.value;
      result._temperature = Extension.serializePrimitiveExtension(this.temperature);
    }

    if (this.scale) {
      result.scale = this.scale.value;
      result._scale = Extension.serializePrimitiveExtension(this.scale);
    }

    if (this.duration) {
      result.duration = this.duration.toJSON();
    }

    return result;
  }

  public clone(): BiologicallyDerivedProductStorage {
    return BiologicallyDerivedProductStorage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BiologicallyDerivedProductStorage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
