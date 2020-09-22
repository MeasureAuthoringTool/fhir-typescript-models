/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  Extension,
  IHumanName,
  NameUse,
  Period,
  PrimitiveString,
} from "../internal";

export class HumanName extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "HumanName";
  
  static readonly primaryCodePath: string | null = null;

  public use?: NameUse;

  public text?: PrimitiveString;

  public family?: PrimitiveString;

  public given?: Array<PrimitiveString>;

  public prefix?: Array<PrimitiveString>;

  public suffix?: Array<PrimitiveString>;

  public period?: Period;

  public static parse(
    json: IHumanName,
    providedInstance: HumanName = new HumanName()
  ): HumanName {
    const newInstance: HumanName = Element.parse(json, providedInstance);
  
    if (json.use !== undefined) {
      newInstance.use = NameUse.parsePrimitive(json.use, json._use);
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.family !== undefined) {
      newInstance.family = PrimitiveString.parsePrimitive(json.family, json._family);
    }
    if (json.given !== undefined) {
      newInstance.given = json.given.map((x, i) => {
        const ext = json._given && json._given[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.prefix !== undefined) {
      newInstance.prefix = json.prefix.map((x, i) => {
        const ext = json._prefix && json._prefix[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.suffix !== undefined) {
      newInstance.suffix = json.suffix.map((x, i) => {
        const ext = json._suffix && json._suffix[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    return newInstance;
  }

  public static isHumanName(input?: unknown): input is HumanName {
    const castInput = input as HumanName;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "HumanName";
  }

  public toJSON(): IHumanName {
    const result: IHumanName = super.toJSON();

    if (this.use) {
      result.use = this.use.value;
      result._use = Extension.serializePrimitiveExtension(this.use);
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.family) {
      result.family = this.family.value;
      result._family = Extension.serializePrimitiveExtension(this.family);
    }

    if (this.given) {
      result.given = this.given.filter(x => !!x).map(x => x.value) as typeof result.given;
      result._given = Extension.serializePrimitiveExtensionArray(this.given);
    }

    if (this.prefix) {
      result.prefix = this.prefix.filter(x => !!x).map(x => x.value) as typeof result.prefix;
      result._prefix = Extension.serializePrimitiveExtensionArray(this.prefix);
    }

    if (this.suffix) {
      result.suffix = this.suffix.filter(x => !!x).map(x => x.value) as typeof result.suffix;
      result._suffix = Extension.serializePrimitiveExtensionArray(this.suffix);
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    return result;
  }

  public clone(): HumanName {
    return HumanName.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "HumanName";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
