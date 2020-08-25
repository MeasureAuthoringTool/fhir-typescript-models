/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  ContractPublicationStatus,
  Extension,
  IContractContentDefinition,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  Reference,
} from "../internal";

export class ContractContentDefinition extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.ContentDefinition";

  public type?: CodeableConcept;

  public subType?: CodeableConcept;

  public publisher?: Reference;

  public publicationDate?: PrimitiveDateTime;

  public publicationStatus?: ContractPublicationStatus;

  public copyright?: PrimitiveMarkdown;

  public static parse(
    json: IContractContentDefinition,
    providedInstance: ContractContentDefinition = new ContractContentDefinition()
  ): ContractContentDefinition {
    const newInstance: ContractContentDefinition = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subType) {
      newInstance.subType = CodeableConcept.parse(json.subType);
    }
    if (json.publisher) {
      newInstance.publisher = Reference.parse(json.publisher);
    }
    if (json.publicationDate) {
      newInstance.publicationDate = PrimitiveDateTime.parsePrimitive(json.publicationDate, json._publicationDate);
    }
    if (json.publicationStatus) {
      newInstance.publicationStatus = ContractPublicationStatus.parsePrimitive(json.publicationStatus, json._publicationStatus);
    }
    if (json.copyright) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    return newInstance;
  }

  public static isContractContentDefinition(input?: unknown): input is ContractContentDefinition {
    const castInput = input as ContractContentDefinition;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractContentDefinition";
  }

  public toJSON(): IContractContentDefinition {
    const result: IContractContentDefinition = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.subType) {
      result.subType = this.subType.toJSON();
    }

    if (this.publisher) {
      result.publisher = this.publisher.toJSON();
    }

    if (this.publicationDate) {
      result.publicationDate = this.publicationDate.value;
      result._publicationDate = Extension.serializePrimitiveExtension(this.publicationDate);
    }

    if (this.publicationStatus) {
      result.publicationStatus = this.publicationStatus.value;
      result._publicationStatus = Extension.serializePrimitiveExtension(this.publicationStatus);
    }

    if (this.copyright) {
      result.copyright = this.copyright.value;
      result._copyright = Extension.serializePrimitiveExtension(this.copyright);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ContractContentDefinition";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
