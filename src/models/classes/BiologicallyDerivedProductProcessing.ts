/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IBiologicallyDerivedProductProcessing,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
} from "../internal";

export class BiologicallyDerivedProductProcessing extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProduct.Processing";

  public description?: PrimitiveString;

  public procedure?: CodeableConcept;

  public additive?: Reference;

  public time?: PrimitiveDateTime | Period;

  public static parse(
    json: IBiologicallyDerivedProductProcessing,
    providedInstance: BiologicallyDerivedProductProcessing = new BiologicallyDerivedProductProcessing()
  ): BiologicallyDerivedProductProcessing {
    const newInstance: BiologicallyDerivedProductProcessing = BackboneElement.parse(json, providedInstance);
  
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.procedure) {
      newInstance.procedure = CodeableConcept.parse(json.procedure);
    }
    if (json.additive) {
      newInstance.additive = Reference.parse(json.additive);
    }
    if (json.timeDateTime) {
      newInstance.time = PrimitiveDateTime.parsePrimitive(json.timeDateTime, json._timeDateTime);
    }
    if (json.timePeriod) {
      newInstance.time = Period.parse(json.timePeriod);
    }
    return newInstance;
  }

  public static isBiologicallyDerivedProductProcessing(input?: unknown): input is BiologicallyDerivedProductProcessing {
    const castInput = input as BiologicallyDerivedProductProcessing;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BiologicallyDerivedProductProcessing";
  }

  public toJSON(): IBiologicallyDerivedProductProcessing {
    const result: IBiologicallyDerivedProductProcessing = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.procedure) {
      result.procedure = this.procedure.toJSON();
    }

    if (this.additive) {
      result.additive = this.additive.toJSON();
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
    return "BiologicallyDerivedProductProcessing";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
