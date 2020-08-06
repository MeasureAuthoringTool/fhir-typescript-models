/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISpecimenProcessing,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
} from "../internal";

export class SpecimenProcessing extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Specimen.Processing";

  public description?: PrimitiveString;

  public procedure?: CodeableConcept;

  public additive?: Array<Reference>;

  public time?: PrimitiveDateTime | Period;

  public static parse(
    json: ISpecimenProcessing,
    providedInstance: SpecimenProcessing = new SpecimenProcessing()
  ): SpecimenProcessing {
    const newInstance: SpecimenProcessing = BackboneElement.parse(json, providedInstance);
  
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.procedure) {
      newInstance.procedure = CodeableConcept.parse(json.procedure);
    }
    if (json.additive) {
      newInstance.additive = json.additive.map((x) => Reference.parse(x));
    }
    if (json.timeDateTime) {
      newInstance.time = PrimitiveDateTime.parsePrimitive(json.timeDateTime, json._timeDateTime);
    }
    if (json.timePeriod) {
      newInstance.time = Period.parse(json.timePeriod);
    }
    return newInstance;
  }

  public static isSpecimenProcessing(input?: unknown): input is SpecimenProcessing {
    const castInput = input as SpecimenProcessing;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SpecimenProcessing";
  }

  public toJSON(): ISpecimenProcessing {
    const result: ISpecimenProcessing = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.procedure) {
      result.procedure = this.procedure.toJSON();
    }

    if (this.additive) {
      result.additive = this.additive.map((x) => x.toJSON());
    }

    if (this.time && PrimitiveDateTime.isPrimitiveDateTime(this.time)) {
      result.timeDateTime = this.time.value;
      result._timeDateTime = Extension.serializePrimitiveExtension(this.time);
    }

    if (this.time && Period.isPeriod(this.time)) {
      result.timePeriod = this.time.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "SpecimenProcessing";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
