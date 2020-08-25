/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  BackboneElement,
  CodeableConcept,
  Extension,
  IVisionPrescriptionLensSpecification,
  PrimitiveDecimal,
  PrimitiveInteger,
  PrimitiveString,
  SimpleQuantity,
  VisionEyes,
  VisionPrescriptionLensSpecificationPrism,
} from "../internal";

export class VisionPrescriptionLensSpecification extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "VisionPrescription.LensSpecification";

  public product?: CodeableConcept;

  public eye?: VisionEyes;

  public sphere?: PrimitiveDecimal;

  public cylinder?: PrimitiveDecimal;

  public axis?: PrimitiveInteger;

  public prism?: Array<VisionPrescriptionLensSpecificationPrism>;

  public add?: PrimitiveDecimal;

  public power?: PrimitiveDecimal;

  public backCurve?: PrimitiveDecimal;

  public diameter?: PrimitiveDecimal;

  public duration?: SimpleQuantity;

  public color?: PrimitiveString;

  public brand?: PrimitiveString;

  public note?: Array<Annotation>;

  public static parse(
    json: IVisionPrescriptionLensSpecification,
    providedInstance: VisionPrescriptionLensSpecification = new VisionPrescriptionLensSpecification()
  ): VisionPrescriptionLensSpecification {
    const newInstance: VisionPrescriptionLensSpecification = BackboneElement.parse(json, providedInstance);
  
    if (json.product) {
      newInstance.product = CodeableConcept.parse(json.product);
    }
    if (json.eye) {
      newInstance.eye = VisionEyes.parsePrimitive(json.eye, json._eye);
    }
    if (json.sphere) {
      newInstance.sphere = PrimitiveDecimal.parsePrimitive(json.sphere, json._sphere);
    }
    if (json.cylinder) {
      newInstance.cylinder = PrimitiveDecimal.parsePrimitive(json.cylinder, json._cylinder);
    }
    if (json.axis) {
      newInstance.axis = PrimitiveInteger.parsePrimitive(json.axis, json._axis);
    }
    if (json.prism) {
      newInstance.prism = json.prism.map((x) => VisionPrescriptionLensSpecificationPrism.parse(x));
    }
    if (json.add) {
      newInstance.add = PrimitiveDecimal.parsePrimitive(json.add, json._add);
    }
    if (json.power) {
      newInstance.power = PrimitiveDecimal.parsePrimitive(json.power, json._power);
    }
    if (json.backCurve) {
      newInstance.backCurve = PrimitiveDecimal.parsePrimitive(json.backCurve, json._backCurve);
    }
    if (json.diameter) {
      newInstance.diameter = PrimitiveDecimal.parsePrimitive(json.diameter, json._diameter);
    }
    if (json.duration) {
      newInstance.duration = SimpleQuantity.parse(json.duration);
    }
    if (json.color) {
      newInstance.color = PrimitiveString.parsePrimitive(json.color, json._color);
    }
    if (json.brand) {
      newInstance.brand = PrimitiveString.parsePrimitive(json.brand, json._brand);
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    return newInstance;
  }

  public static isVisionPrescriptionLensSpecification(input?: unknown): input is VisionPrescriptionLensSpecification {
    const castInput = input as VisionPrescriptionLensSpecification;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "VisionPrescriptionLensSpecification";
  }

  public toJSON(): IVisionPrescriptionLensSpecification {
    const result: IVisionPrescriptionLensSpecification = super.toJSON();

    if (this.product) {
      result.product = this.product.toJSON();
    }

    if (this.eye) {
      result.eye = this.eye.value;
      result._eye = Extension.serializePrimitiveExtension(this.eye);
    }

    if (this.sphere) {
      result.sphere = this.sphere.value;
      result._sphere = Extension.serializePrimitiveExtension(this.sphere);
    }

    if (this.cylinder) {
      result.cylinder = this.cylinder.value;
      result._cylinder = Extension.serializePrimitiveExtension(this.cylinder);
    }

    if (this.axis) {
      result.axis = this.axis.value;
      result._axis = Extension.serializePrimitiveExtension(this.axis);
    }

    if (this.prism) {
      result.prism = this.prism.map((x) => x.toJSON());
    }

    if (this.add) {
      result.add = this.add.value;
      result._add = Extension.serializePrimitiveExtension(this.add);
    }

    if (this.power) {
      result.power = this.power.value;
      result._power = Extension.serializePrimitiveExtension(this.power);
    }

    if (this.backCurve) {
      result.backCurve = this.backCurve.value;
      result._backCurve = Extension.serializePrimitiveExtension(this.backCurve);
    }

    if (this.diameter) {
      result.diameter = this.diameter.value;
      result._diameter = Extension.serializePrimitiveExtension(this.diameter);
    }

    if (this.duration) {
      result.duration = this.duration.toJSON();
    }

    if (this.color) {
      result.color = this.color.value;
      result._color = Extension.serializePrimitiveExtension(this.color);
    }

    if (this.brand) {
      result.brand = this.brand.value;
      result._brand = Extension.serializePrimitiveExtension(this.brand);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "VisionPrescriptionLensSpecification";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
