/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  AccountCoverage,
  AccountGuarantor,
  AccountStatus,
  CodeableConcept,
  DomainResource,
  Extension,
  IAccount,
  Identifier,
  Period,
  PrimitiveString,
  Reference,
} from "../internal";

export class Account extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Account";

  public identifier?: Array<Identifier>;

  public status?: AccountStatus;

  public type?: CodeableConcept;

  public name?: PrimitiveString;

  public subject?: Array<Reference>;

  public servicePeriod?: Period;

  public coverage?: Array<AccountCoverage>;

  public owner?: Reference;

  public description?: PrimitiveString;

  public guarantor?: Array<AccountGuarantor>;

  public partOf?: Reference;

  public static parse(
    json: IAccount,
    providedInstance: Account = new Account()
  ): Account {
    const newInstance: Account = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = AccountStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.subject) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.servicePeriod) {
      newInstance.servicePeriod = Period.parse(json.servicePeriod);
    }
    if (json.coverage) {
      newInstance.coverage = json.coverage.map((x) => AccountCoverage.parse(x));
    }
    if (json.owner) {
      newInstance.owner = Reference.parse(json.owner);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.guarantor) {
      newInstance.guarantor = json.guarantor.map((x) => AccountGuarantor.parse(x));
    }
    if (json.partOf) {
      newInstance.partOf = Reference.parse(json.partOf);
    }
    return newInstance;
  }

  public static isAccount(input?: unknown): input is Account {
    const castInput = input as Account;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Account";
  }

  public toJSON(): IAccount {
    const result: IAccount = super.toJSON();

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

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.subject) {
      result.subject = this.subject.map((x) => x.toJSON());
    }

    if (this.servicePeriod) {
      result.servicePeriod = this.servicePeriod.toJSON();
    }

    if (this.coverage) {
      result.coverage = this.coverage.map((x) => x.toJSON());
    }

    if (this.owner) {
      result.owner = this.owner.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.guarantor) {
      result.guarantor = this.guarantor.map((x) => x.toJSON());
    }

    if (this.partOf) {
      result.partOf = this.partOf.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Account";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
