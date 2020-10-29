/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  CoverageClass,
  CoverageCostToBeneficiary,
  CoverageStatus,
  DomainResource,
  Extension,
  ICoverage,
  Identifier,
  Period,
  PrimitiveBoolean,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
  FieldMetadata
} from "../internal";

export class Coverage extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Coverage";
  
  static readonly primaryCodePath: string | null = "type";

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [CoverageStatus],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "policyHolder",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "subscriber",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "subscriberId",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "beneficiary",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "dependent",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "relationship",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "period",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "payor",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "class",
      fieldType: [CoverageClass],
      isArray: true
    }, {
      fieldName: "order",
      fieldType: [PrimitivePositiveInt],
      isArray: false
    }, {
      fieldName: "network",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "costToBeneficiary",
      fieldType: [CoverageCostToBeneficiary],
      isArray: true
    }, {
      fieldName: "subrogation",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "contract",
      fieldType: [Reference],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: CoverageStatus;

  public type?: CodeableConcept;

  public policyHolder?: Reference;

  public subscriber?: Reference;

  public subscriberId?: PrimitiveString;

  public beneficiary?: Reference;

  public dependent?: PrimitiveString;

  public relationship?: CodeableConcept;

  public period?: Period;

  public payor?: Array<Reference>;

  public class?: Array<CoverageClass>;

  public order?: PrimitivePositiveInt;

  public network?: PrimitiveString;

  public costToBeneficiary?: Array<CoverageCostToBeneficiary>;

  public subrogation?: PrimitiveBoolean;

  public contract?: Array<Reference>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.type;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.type = primaryCode;
  }

  public static parse(
    json: ICoverage,
    providedInstance: Coverage = new Coverage()
  ): Coverage {
    const newInstance: Coverage = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = CoverageStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.policyHolder !== undefined) {
      newInstance.policyHolder = Reference.parse(json.policyHolder);
    }
    if (json.subscriber !== undefined) {
      newInstance.subscriber = Reference.parse(json.subscriber);
    }
    if (json.subscriberId !== undefined) {
      newInstance.subscriberId = PrimitiveString.parsePrimitive(json.subscriberId, json._subscriberId);
    }
    if (json.beneficiary !== undefined) {
      newInstance.beneficiary = Reference.parse(json.beneficiary);
    }
    if (json.dependent !== undefined) {
      newInstance.dependent = PrimitiveString.parsePrimitive(json.dependent, json._dependent);
    }
    if (json.relationship !== undefined) {
      newInstance.relationship = CodeableConcept.parse(json.relationship);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.payor !== undefined) {
      newInstance.payor = json.payor.map((x) => Reference.parse(x));
    }
    if (json.class !== undefined) {
      newInstance.class = json.class.map((x) => CoverageClass.parse(x));
    }
    if (json.order !== undefined) {
      newInstance.order = PrimitivePositiveInt.parsePrimitive(json.order, json._order);
    }
    if (json.network !== undefined) {
      newInstance.network = PrimitiveString.parsePrimitive(json.network, json._network);
    }
    if (json.costToBeneficiary !== undefined) {
      newInstance.costToBeneficiary = json.costToBeneficiary.map((x) => CoverageCostToBeneficiary.parse(x));
    }
    if (json.subrogation !== undefined) {
      newInstance.subrogation = PrimitiveBoolean.parsePrimitive(json.subrogation, json._subrogation);
    }
    if (json.contract !== undefined) {
      newInstance.contract = json.contract.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isCoverage(input?: unknown): input is Coverage {
    const castInput = input as Coverage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Coverage";
  }

  public toJSON(): ICoverage {
    const result: ICoverage = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.policyHolder) {
      result.policyHolder = this.policyHolder.toJSON();
    }

    if (this.subscriber) {
      result.subscriber = this.subscriber.toJSON();
    }

    if (this.subscriberId) {
      result.subscriberId = this.subscriberId.value;
      result._subscriberId = Extension.serializePrimitiveExtension(this.subscriberId);
    }

    if (this.beneficiary) {
      result.beneficiary = this.beneficiary.toJSON();
    }

    if (this.dependent) {
      result.dependent = this.dependent.value;
      result._dependent = Extension.serializePrimitiveExtension(this.dependent);
    }

    if (this.relationship) {
      result.relationship = this.relationship.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.payor) {
      result.payor = this.payor.map((x) => x.toJSON());
    }

    if (this.class) {
      result.class = this.class.map((x) => x.toJSON());
    }

    if (this.order) {
      result.order = this.order.value;
      result._order = Extension.serializePrimitiveExtension(this.order);
    }

    if (this.network) {
      result.network = this.network.value;
      result._network = Extension.serializePrimitiveExtension(this.network);
    }

    if (this.costToBeneficiary) {
      result.costToBeneficiary = this.costToBeneficiary.map((x) => x.toJSON());
    }

    if (this.subrogation) {
      result.subrogation = this.subrogation.value;
      result._subrogation = Extension.serializePrimitiveExtension(this.subrogation);
    }

    if (this.contract) {
      result.contract = this.contract.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Coverage {
    return Coverage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Coverage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
