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
} from "../internal";

export class Coverage extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Coverage";

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

  public static parse(
    json: ICoverage,
    providedInstance: Coverage = new Coverage()
  ): Coverage {
    const newInstance: Coverage = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = CoverageStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.policyHolder) {
      newInstance.policyHolder = Reference.parse(json.policyHolder);
    }
    if (json.subscriber) {
      newInstance.subscriber = Reference.parse(json.subscriber);
    }
    if (json.subscriberId) {
      newInstance.subscriberId = PrimitiveString.parsePrimitive(json.subscriberId, json._subscriberId);
    }
    if (json.beneficiary) {
      newInstance.beneficiary = Reference.parse(json.beneficiary);
    }
    if (json.dependent) {
      newInstance.dependent = PrimitiveString.parsePrimitive(json.dependent, json._dependent);
    }
    if (json.relationship) {
      newInstance.relationship = CodeableConcept.parse(json.relationship);
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.payor) {
      newInstance.payor = json.payor.map((x) => Reference.parse(x));
    }
    if (json.class) {
      newInstance.class = json.class.map((x) => CoverageClass.parse(x));
    }
    if (json.order) {
      newInstance.order = PrimitivePositiveInt.parsePrimitive(json.order, json._order);
    }
    if (json.network) {
      newInstance.network = PrimitiveString.parsePrimitive(json.network, json._network);
    }
    if (json.costToBeneficiary) {
      newInstance.costToBeneficiary = json.costToBeneficiary.map((x) => CoverageCostToBeneficiary.parse(x));
    }
    if (json.subrogation) {
      newInstance.subrogation = PrimitiveBoolean.parsePrimitive(json.subrogation, json._subrogation);
    }
    if (json.contract) {
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
  
  public getTypeName(): string {
    return "Coverage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
