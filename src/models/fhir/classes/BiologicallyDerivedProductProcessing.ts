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
  FieldMetadata
} from "../internal";

export class BiologicallyDerivedProductProcessing extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProduct.Processing";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "procedure",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "additive",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "time",
      fieldType: [PrimitiveDateTime, Period],
      isArray: false
    }];
  }

  public description?: PrimitiveString;

  public procedure?: CodeableConcept;

  public additive?: Reference;

  public time?: PrimitiveDateTime | Period;

  public static parse(
    json: IBiologicallyDerivedProductProcessing,
    providedInstance: BiologicallyDerivedProductProcessing = new BiologicallyDerivedProductProcessing()
  ): BiologicallyDerivedProductProcessing {
    const newInstance: BiologicallyDerivedProductProcessing = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.procedure !== undefined) {
      newInstance.procedure = CodeableConcept.parse(json.procedure);
    }
    if (json.additive !== undefined) {
      newInstance.additive = Reference.parse(json.additive);
    }
    if (json.timeDateTime !== undefined) {
      newInstance.time = PrimitiveDateTime.parsePrimitive(json.timeDateTime, json._timeDateTime);
    }
    if (json.timePeriod !== undefined) {
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

  public clone(): BiologicallyDerivedProductProcessing {
    return BiologicallyDerivedProductProcessing.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BiologicallyDerivedProductProcessing";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
