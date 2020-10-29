/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  CoverageEligibilityResponseInsuranceItemBenefit,
  Extension,
  ICoverageEligibilityResponseInsuranceItem,
  PrimitiveBoolean,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  FieldMetadata
} from "../internal";

export class CoverageEligibilityResponseInsuranceItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CoverageEligibilityResponse.Insurance.Item";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "category",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "productOrService",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "modifier",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "provider",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "excluded",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "description",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "network",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "unit",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "term",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "benefit",
      fieldType: [CoverageEligibilityResponseInsuranceItemBenefit],
      isArray: true
    }, {
      fieldName: "authorizationRequired",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "authorizationSupporting",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "authorizationUrl",
      fieldType: [PrimitiveUri],
      isArray: false
    }];
  }

  public category?: CodeableConcept;

  public productOrService?: CodeableConcept;

  public modifier?: Array<CodeableConcept>;

  public provider?: Reference;

  public excluded?: PrimitiveBoolean;

  public name?: PrimitiveString;

  public description?: PrimitiveString;

  public network?: CodeableConcept;

  public unit?: CodeableConcept;

  public term?: CodeableConcept;

  public benefit?: Array<CoverageEligibilityResponseInsuranceItemBenefit>;

  public authorizationRequired?: PrimitiveBoolean;

  public authorizationSupporting?: Array<CodeableConcept>;

  public authorizationUrl?: PrimitiveUri;

  public static parse(
    json: ICoverageEligibilityResponseInsuranceItem,
    providedInstance: CoverageEligibilityResponseInsuranceItem = new CoverageEligibilityResponseInsuranceItem()
  ): CoverageEligibilityResponseInsuranceItem {
    const newInstance: CoverageEligibilityResponseInsuranceItem = BackboneElement.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.productOrService !== undefined) {
      newInstance.productOrService = CodeableConcept.parse(json.productOrService);
    }
    if (json.modifier !== undefined) {
      newInstance.modifier = json.modifier.map((x) => CodeableConcept.parse(x));
    }
    if (json.provider !== undefined) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.excluded !== undefined) {
      newInstance.excluded = PrimitiveBoolean.parsePrimitive(json.excluded, json._excluded);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.network !== undefined) {
      newInstance.network = CodeableConcept.parse(json.network);
    }
    if (json.unit !== undefined) {
      newInstance.unit = CodeableConcept.parse(json.unit);
    }
    if (json.term !== undefined) {
      newInstance.term = CodeableConcept.parse(json.term);
    }
    if (json.benefit !== undefined) {
      newInstance.benefit = json.benefit.map((x) => CoverageEligibilityResponseInsuranceItemBenefit.parse(x));
    }
    if (json.authorizationRequired !== undefined) {
      newInstance.authorizationRequired = PrimitiveBoolean.parsePrimitive(json.authorizationRequired, json._authorizationRequired);
    }
    if (json.authorizationSupporting !== undefined) {
      newInstance.authorizationSupporting = json.authorizationSupporting.map((x) => CodeableConcept.parse(x));
    }
    if (json.authorizationUrl !== undefined) {
      newInstance.authorizationUrl = PrimitiveUri.parsePrimitive(json.authorizationUrl, json._authorizationUrl);
    }
    return newInstance;
  }

  public static isCoverageEligibilityResponseInsuranceItem(input?: unknown): input is CoverageEligibilityResponseInsuranceItem {
    const castInput = input as CoverageEligibilityResponseInsuranceItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CoverageEligibilityResponseInsuranceItem";
  }

  public toJSON(): ICoverageEligibilityResponseInsuranceItem {
    const result: ICoverageEligibilityResponseInsuranceItem = super.toJSON();

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.productOrService) {
      result.productOrService = this.productOrService.toJSON();
    }

    if (this.modifier) {
      result.modifier = this.modifier.map((x) => x.toJSON());
    }

    if (this.provider) {
      result.provider = this.provider.toJSON();
    }

    if (this.excluded) {
      result.excluded = this.excluded.value;
      result._excluded = Extension.serializePrimitiveExtension(this.excluded);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.network) {
      result.network = this.network.toJSON();
    }

    if (this.unit) {
      result.unit = this.unit.toJSON();
    }

    if (this.term) {
      result.term = this.term.toJSON();
    }

    if (this.benefit) {
      result.benefit = this.benefit.map((x) => x.toJSON());
    }

    if (this.authorizationRequired) {
      result.authorizationRequired = this.authorizationRequired.value;
      result._authorizationRequired = Extension.serializePrimitiveExtension(this.authorizationRequired);
    }

    if (this.authorizationSupporting) {
      result.authorizationSupporting = this.authorizationSupporting.map((x) => x.toJSON());
    }

    if (this.authorizationUrl) {
      result.authorizationUrl = this.authorizationUrl.value;
      result._authorizationUrl = Extension.serializePrimitiveExtension(this.authorizationUrl);
    }

    return result;
  }

  public clone(): CoverageEligibilityResponseInsuranceItem {
    return CoverageEligibilityResponseInsuranceItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CoverageEligibilityResponseInsuranceItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
