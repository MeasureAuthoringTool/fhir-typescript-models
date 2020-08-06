/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  BackboneElement,
  CodeableConcept,
  Extension,
  IProdCharacteristic,
  PrimitiveString,
  Quantity,
} from "../internal";

export class ProdCharacteristic extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ProdCharacteristic";

  public height?: Quantity;

  public width?: Quantity;

  public depth?: Quantity;

  public weight?: Quantity;

  public nominalVolume?: Quantity;

  public externalDiameter?: Quantity;

  public shape?: PrimitiveString;

  public color?: Array<PrimitiveString>;

  public imprint?: Array<PrimitiveString>;

  public image?: Array<Attachment>;

  public scoring?: CodeableConcept;

  public static parse(
    json: IProdCharacteristic,
    providedInstance: ProdCharacteristic = new ProdCharacteristic()
  ): ProdCharacteristic {
    const newInstance: ProdCharacteristic = BackboneElement.parse(json, providedInstance);
  
    if (json.height) {
      newInstance.height = Quantity.parse(json.height);
    }
    if (json.width) {
      newInstance.width = Quantity.parse(json.width);
    }
    if (json.depth) {
      newInstance.depth = Quantity.parse(json.depth);
    }
    if (json.weight) {
      newInstance.weight = Quantity.parse(json.weight);
    }
    if (json.nominalVolume) {
      newInstance.nominalVolume = Quantity.parse(json.nominalVolume);
    }
    if (json.externalDiameter) {
      newInstance.externalDiameter = Quantity.parse(json.externalDiameter);
    }
    if (json.shape) {
      newInstance.shape = PrimitiveString.parsePrimitive(json.shape, json._shape);
    }
    if (json.color) {
      newInstance.color = json.color.map((x, i) => {
        const ext = json._color && json._color[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.imprint) {
      newInstance.imprint = json.imprint.map((x, i) => {
        const ext = json._imprint && json._imprint[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.image) {
      newInstance.image = json.image.map((x) => Attachment.parse(x));
    }
    if (json.scoring) {
      newInstance.scoring = CodeableConcept.parse(json.scoring);
    }
    return newInstance;
  }

  public static isProdCharacteristic(input?: unknown): input is ProdCharacteristic {
    const castInput = input as ProdCharacteristic;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ProdCharacteristic";
  }

  public toJSON(): IProdCharacteristic {
    const result: IProdCharacteristic = super.toJSON();

    if (this.height) {
      result.height = this.height.toJSON();
    }

    if (this.width) {
      result.width = this.width.toJSON();
    }

    if (this.depth) {
      result.depth = this.depth.toJSON();
    }

    if (this.weight) {
      result.weight = this.weight.toJSON();
    }

    if (this.nominalVolume) {
      result.nominalVolume = this.nominalVolume.toJSON();
    }

    if (this.externalDiameter) {
      result.externalDiameter = this.externalDiameter.toJSON();
    }

    if (this.shape) {
      result.shape = this.shape.value;
      result._shape = Extension.serializePrimitiveExtension(this.shape);
    }

    if (this.color) {
      result.color = this.color.filter(x => !!x).map(x => x.value) as typeof result.color;
      result._color = Extension.serializePrimitiveExtensionArray(this.color);
    }

    if (this.imprint) {
      result.imprint = this.imprint.filter(x => !!x).map(x => x.value) as typeof result.imprint;
      result._imprint = Extension.serializePrimitiveExtensionArray(this.imprint);
    }

    if (this.image) {
      result.image = this.image.map((x) => x.toJSON());
    }

    if (this.scoring) {
      result.scoring = this.scoring.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ProdCharacteristic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
