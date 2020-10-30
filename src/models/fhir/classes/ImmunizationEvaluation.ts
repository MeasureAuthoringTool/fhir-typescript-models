/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IImmunizationEvaluation,
  ImmunizationEvaluationStatus,
  PrimitiveDateTime,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
  FieldMetadata
} from "../internal";

export class ImmunizationEvaluation extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImmunizationEvaluation";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [ImmunizationEvaluationStatus],
      isArray: false
    }, {
      fieldName: "patient",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "date",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "authority",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "targetDisease",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "immunizationEvent",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "doseStatus",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "doseStatusReason",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "series",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "doseNumber",
      fieldType: [PrimitivePositiveInt, PrimitiveString],
      isArray: false
    }, {
      fieldName: "seriesDoses",
      fieldType: [PrimitivePositiveInt, PrimitiveString],
      isArray: false
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: ImmunizationEvaluationStatus;

  public patient?: Reference;

  public date?: PrimitiveDateTime;

  public authority?: Reference;

  public targetDisease?: CodeableConcept;

  public immunizationEvent?: Reference;

  public doseStatus?: CodeableConcept;

  public doseStatusReason?: Array<CodeableConcept>;

  public description?: PrimitiveString;

  public series?: PrimitiveString;

  public doseNumber?: PrimitivePositiveInt | PrimitiveString;

  public seriesDoses?: PrimitivePositiveInt | PrimitiveString;

  public static parse(
    json: IImmunizationEvaluation,
    providedInstance: ImmunizationEvaluation = new ImmunizationEvaluation()
  ): ImmunizationEvaluation {
    const newInstance: ImmunizationEvaluation = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ImmunizationEvaluationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.authority !== undefined) {
      newInstance.authority = Reference.parse(json.authority);
    }
    if (json.targetDisease !== undefined) {
      newInstance.targetDisease = CodeableConcept.parse(json.targetDisease);
    }
    if (json.immunizationEvent !== undefined) {
      newInstance.immunizationEvent = Reference.parse(json.immunizationEvent);
    }
    if (json.doseStatus !== undefined) {
      newInstance.doseStatus = CodeableConcept.parse(json.doseStatus);
    }
    if (json.doseStatusReason !== undefined) {
      newInstance.doseStatusReason = json.doseStatusReason.map((x) => CodeableConcept.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.series !== undefined) {
      newInstance.series = PrimitiveString.parsePrimitive(json.series, json._series);
    }
    if (json.doseNumberPositiveInt !== undefined) {
      newInstance.doseNumber = PrimitivePositiveInt.parsePrimitive(json.doseNumberPositiveInt, json._doseNumberPositiveInt);
    }
    if (json.doseNumberString !== undefined) {
      newInstance.doseNumber = PrimitiveString.parsePrimitive(json.doseNumberString, json._doseNumberString);
    }
    if (json.seriesDosesPositiveInt !== undefined) {
      newInstance.seriesDoses = PrimitivePositiveInt.parsePrimitive(json.seriesDosesPositiveInt, json._seriesDosesPositiveInt);
    }
    if (json.seriesDosesString !== undefined) {
      newInstance.seriesDoses = PrimitiveString.parsePrimitive(json.seriesDosesString, json._seriesDosesString);
    }
    return newInstance;
  }

  public static isImmunizationEvaluation(input?: unknown): input is ImmunizationEvaluation {
    const castInput = input as ImmunizationEvaluation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationEvaluation";
  }

  public toJSON(): IImmunizationEvaluation {
    const result: IImmunizationEvaluation = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.authority) {
      result.authority = this.authority.toJSON();
    }

    if (this.targetDisease) {
      result.targetDisease = this.targetDisease.toJSON();
    }

    if (this.immunizationEvent) {
      result.immunizationEvent = this.immunizationEvent.toJSON();
    }

    if (this.doseStatus) {
      result.doseStatus = this.doseStatus.toJSON();
    }

    if (this.doseStatusReason) {
      result.doseStatusReason = this.doseStatusReason.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.series) {
      result.series = this.series.value;
      result._series = Extension.serializePrimitiveExtension(this.series);
    }

    if (this.doseNumber && PrimitivePositiveInt.isPrimitivePositiveInt(this.doseNumber)) {
      result.doseNumberPositiveInt = this.doseNumber.value;
      result._doseNumberPositiveInt = Extension.serializePrimitiveExtension(this.doseNumber);
    }

    if (this.doseNumber && PrimitiveString.isPrimitiveString(this.doseNumber)) {
      result.doseNumberString = this.doseNumber.value;
      result._doseNumberString = Extension.serializePrimitiveExtension(this.doseNumber);
    }

    if (this.seriesDoses && PrimitivePositiveInt.isPrimitivePositiveInt(this.seriesDoses)) {
      result.seriesDosesPositiveInt = this.seriesDoses.value;
      result._seriesDosesPositiveInt = Extension.serializePrimitiveExtension(this.seriesDoses);
    }

    if (this.seriesDoses && PrimitiveString.isPrimitiveString(this.seriesDoses)) {
      result.seriesDosesString = this.seriesDoses.value;
      result._seriesDosesString = Extension.serializePrimitiveExtension(this.seriesDoses);
    }

    return result;
  }

  public clone(): ImmunizationEvaluation {
    return ImmunizationEvaluation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImmunizationEvaluation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
