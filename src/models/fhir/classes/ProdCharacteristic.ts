/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  IProdCharacteristic,
  PrimitiveString,
  Quantity,
  FhirType
} from "../internal";

@FhirType("ProdCharacteristic", "BackboneElement")
export class ProdCharacteristic extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ProdCharacteristic";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Quantity")
  public height?: Quantity;

  @FhirField("Quantity")
  public width?: Quantity;

  @FhirField("Quantity")
  public depth?: Quantity;

  @FhirField("Quantity")
  public weight?: Quantity;

  @FhirField("Quantity")
  public nominalVolume?: Quantity;

  @FhirField("Quantity")
  public externalDiameter?: Quantity;

  @FhirField("PrimitiveString")
  public shape?: PrimitiveString;

  @FhirList("PrimitiveString")
  public color?: Array<PrimitiveString>;

  @FhirList("PrimitiveString")
  public imprint?: Array<PrimitiveString>;

  @FhirList("Attachment")
  public image?: Array<Attachment>;

  @FhirField("CodeableConcept")
  public scoring?: CodeableConcept;

  public static parse(
    json: IProdCharacteristic,
    providedInstance: ProdCharacteristic = new ProdCharacteristic()
  ): ProdCharacteristic {
    const newInstance: ProdCharacteristic = BackboneElement.parse(json, providedInstance);
  
    if (json.height !== undefined) {
      newInstance.height = Quantity.parse(json.height);
    }
    if (json.width !== undefined) {
      newInstance.width = Quantity.parse(json.width);
    }
    if (json.depth !== undefined) {
      newInstance.depth = Quantity.parse(json.depth);
    }
    if (json.weight !== undefined) {
      newInstance.weight = Quantity.parse(json.weight);
    }
    if (json.nominalVolume !== undefined) {
      newInstance.nominalVolume = Quantity.parse(json.nominalVolume);
    }
    if (json.externalDiameter !== undefined) {
      newInstance.externalDiameter = Quantity.parse(json.externalDiameter);
    }
    if (json.shape !== undefined) {
      newInstance.shape = PrimitiveString.parsePrimitive(json.shape, json._shape);
    }
    if (json.color !== undefined) {
      newInstance.color = json.color.map((x, i) => PrimitiveString.parsePrimitive(x, json._color?.[i]));
    }
    if (json.imprint !== undefined) {
      newInstance.imprint = json.imprint.map((x, i) => PrimitiveString.parsePrimitive(x, json._imprint?.[i]));
    }
    if (json.image !== undefined) {
      newInstance.image = json.image.map((x) => Attachment.parse(x));
    }
    if (json.scoring !== undefined) {
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

  public clone(): ProdCharacteristic {
    return ProdCharacteristic.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ProdCharacteristic";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
