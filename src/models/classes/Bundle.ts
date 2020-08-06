/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BundleEntry,
  BundleLink,
  BundleType,
  Extension,
  IBundle,
  Identifier,
  PrimitiveInstant,
  PrimitiveUnsignedInt,
  Resource,
  Signature,
} from "../internal";

export class Bundle extends Resource {
  static readonly baseType: string = "FHIR.Resource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Bundle";

  public identifier?: Identifier;

  public type?: BundleType;

  public timestamp?: PrimitiveInstant;

  public total?: PrimitiveUnsignedInt;

  public link?: Array<BundleLink>;

  public entry?: Array<BundleEntry>;

  public signature?: Signature;

  public static parse(
    json: IBundle,
    providedInstance: Bundle = new Bundle()
  ): Bundle {
    const newInstance: Bundle = Resource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.type) {
      newInstance.type = BundleType.parsePrimitive(json.type, json._type);
    }
    if (json.timestamp) {
      newInstance.timestamp = PrimitiveInstant.parsePrimitive(json.timestamp, json._timestamp);
    }
    if (json.total) {
      newInstance.total = PrimitiveUnsignedInt.parsePrimitive(json.total, json._total);
    }
    if (json.link) {
      newInstance.link = json.link.map((x) => BundleLink.parse(x));
    }
    if (json.entry) {
      newInstance.entry = json.entry.map((x) => BundleEntry.parse(x));
    }
    if (json.signature) {
      newInstance.signature = Signature.parse(json.signature);
    }
    return newInstance;
  }

  public static isBundle(input?: unknown): input is Bundle {
    const castInput = input as Bundle;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Bundle";
  }

  public toJSON(): IBundle {
    const result: IBundle = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.timestamp) {
      result.timestamp = this.timestamp.value;
      result._timestamp = Extension.serializePrimitiveExtension(this.timestamp);
    }

    if (this.total) {
      result.total = this.total.value;
      result._total = Extension.serializePrimitiveExtension(this.total);
    }

    if (this.link) {
      result.link = this.link.map((x) => x.toJSON());
    }

    if (this.entry) {
      result.entry = this.entry.map((x) => x.toJSON());
    }

    if (this.signature) {
      result.signature = this.signature.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Bundle";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
