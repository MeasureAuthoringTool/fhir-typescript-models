/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IObservationDefinition,
  ObservationDataType,
  ObservationDefinitionQualifiedInterval,
  ObservationDefinitionQuantitativeDetails,
  PrimitiveBoolean,
  PrimitiveString,
  Reference,
  FieldMetadata
} from "../internal";

export class ObservationDefinition extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ObservationDefinition";
  
  static readonly primaryCodePath: string | null = "code";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "category",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "permittedDataType",
      fieldType: [ObservationDataType],
      isArray: true
    }, {
      fieldName: "multipleResultsAllowed",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "method",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "preferredReportName",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "quantitativeDetails",
      fieldType: [ObservationDefinitionQuantitativeDetails],
      isArray: false
    }, {
      fieldName: "qualifiedInterval",
      fieldType: [ObservationDefinitionQualifiedInterval],
      isArray: true
    }, {
      fieldName: "validCodedValueSet",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "normalCodedValueSet",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "abnormalCodedValueSet",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "criticalCodedValueSet",
      fieldType: [Reference],
      isArray: false
    }];
  }

  public category?: Array<CodeableConcept>;

  public code?: CodeableConcept;

  public identifier?: Array<Identifier>;

  public permittedDataType?: Array<ObservationDataType>;

  public multipleResultsAllowed?: PrimitiveBoolean;

  public method?: CodeableConcept;

  public preferredReportName?: PrimitiveString;

  public quantitativeDetails?: ObservationDefinitionQuantitativeDetails;

  public qualifiedInterval?: Array<ObservationDefinitionQualifiedInterval>;

  public validCodedValueSet?: Reference;

  public normalCodedValueSet?: Reference;

  public abnormalCodedValueSet?: Reference;

  public criticalCodedValueSet?: Reference;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IObservationDefinition,
    providedInstance: ObservationDefinition = new ObservationDefinition()
  ): ObservationDefinition {
    const newInstance: ObservationDefinition = DomainResource.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.permittedDataType !== undefined) {
      newInstance.permittedDataType = json.permittedDataType.map((x, i) => {
        const ext = json._permittedDataType && json._permittedDataType[i];
        return ObservationDataType.parsePrimitive(x, ext);
      });
    }
    if (json.multipleResultsAllowed !== undefined) {
      newInstance.multipleResultsAllowed = PrimitiveBoolean.parsePrimitive(json.multipleResultsAllowed, json._multipleResultsAllowed);
    }
    if (json.method !== undefined) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    if (json.preferredReportName !== undefined) {
      newInstance.preferredReportName = PrimitiveString.parsePrimitive(json.preferredReportName, json._preferredReportName);
    }
    if (json.quantitativeDetails !== undefined) {
      newInstance.quantitativeDetails = ObservationDefinitionQuantitativeDetails.parse(json.quantitativeDetails);
    }
    if (json.qualifiedInterval !== undefined) {
      newInstance.qualifiedInterval = json.qualifiedInterval.map((x) => ObservationDefinitionQualifiedInterval.parse(x));
    }
    if (json.validCodedValueSet !== undefined) {
      newInstance.validCodedValueSet = Reference.parse(json.validCodedValueSet);
    }
    if (json.normalCodedValueSet !== undefined) {
      newInstance.normalCodedValueSet = Reference.parse(json.normalCodedValueSet);
    }
    if (json.abnormalCodedValueSet !== undefined) {
      newInstance.abnormalCodedValueSet = Reference.parse(json.abnormalCodedValueSet);
    }
    if (json.criticalCodedValueSet !== undefined) {
      newInstance.criticalCodedValueSet = Reference.parse(json.criticalCodedValueSet);
    }
    return newInstance;
  }

  public static isObservationDefinition(input?: unknown): input is ObservationDefinition {
    const castInput = input as ObservationDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ObservationDefinition";
  }

  public toJSON(): IObservationDefinition {
    const result: IObservationDefinition = super.toJSON();

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.permittedDataType) {
      result.permittedDataType = this.permittedDataType.filter(x => !!x).map(x => x.value) as typeof result.permittedDataType;
      result._permittedDataType = Extension.serializePrimitiveExtensionArray(this.permittedDataType);
    }

    if (this.multipleResultsAllowed) {
      result.multipleResultsAllowed = this.multipleResultsAllowed.value;
      result._multipleResultsAllowed = Extension.serializePrimitiveExtension(this.multipleResultsAllowed);
    }

    if (this.method) {
      result.method = this.method.toJSON();
    }

    if (this.preferredReportName) {
      result.preferredReportName = this.preferredReportName.value;
      result._preferredReportName = Extension.serializePrimitiveExtension(this.preferredReportName);
    }

    if (this.quantitativeDetails) {
      result.quantitativeDetails = this.quantitativeDetails.toJSON();
    }

    if (this.qualifiedInterval) {
      result.qualifiedInterval = this.qualifiedInterval.map((x) => x.toJSON());
    }

    if (this.validCodedValueSet) {
      result.validCodedValueSet = this.validCodedValueSet.toJSON();
    }

    if (this.normalCodedValueSet) {
      result.normalCodedValueSet = this.normalCodedValueSet.toJSON();
    }

    if (this.abnormalCodedValueSet) {
      result.abnormalCodedValueSet = this.abnormalCodedValueSet.toJSON();
    }

    if (this.criticalCodedValueSet) {
      result.criticalCodedValueSet = this.criticalCodedValueSet.toJSON();
    }

    return result;
  }

  public clone(): ObservationDefinition {
    return ObservationDefinition.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ObservationDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
