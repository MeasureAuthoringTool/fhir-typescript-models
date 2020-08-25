/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  Coding,
  DomainResource,
  Extension,
  Identifier,
  IMedicinalProduct,
  MarketingStatus,
  MedicinalProductManufacturingBusinessOperation,
  MedicinalProductName,
  MedicinalProductSpecialDesignation,
  PrimitiveString,
  Reference,
} from "../internal";

export class MedicinalProduct extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProduct";

  public identifier?: Array<Identifier>;

  public type?: CodeableConcept;

  public domain?: Coding;

  public combinedPharmaceuticalDoseForm?: CodeableConcept;

  public legalStatusOfSupply?: CodeableConcept;

  public additionalMonitoringIndicator?: CodeableConcept;

  public specialMeasures?: Array<PrimitiveString>;

  public paediatricUseIndicator?: CodeableConcept;

  public productClassification?: Array<CodeableConcept>;

  public marketingStatus?: Array<MarketingStatus>;

  public pharmaceuticalProduct?: Array<Reference>;

  public packagedMedicinalProduct?: Array<Reference>;

  public attachedDocument?: Array<Reference>;

  public masterFile?: Array<Reference>;

  public contact?: Array<Reference>;

  public clinicalTrial?: Array<Reference>;

  public name?: Array<MedicinalProductName>;

  public crossReference?: Array<Identifier>;

  public manufacturingBusinessOperation?: Array<MedicinalProductManufacturingBusinessOperation>;

  public specialDesignation?: Array<MedicinalProductSpecialDesignation>;

  public static parse(
    json: IMedicinalProduct,
    providedInstance: MedicinalProduct = new MedicinalProduct()
  ): MedicinalProduct {
    const newInstance: MedicinalProduct = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.domain !== undefined) {
      newInstance.domain = Coding.parse(json.domain);
    }
    if (json.combinedPharmaceuticalDoseForm !== undefined) {
      newInstance.combinedPharmaceuticalDoseForm = CodeableConcept.parse(json.combinedPharmaceuticalDoseForm);
    }
    if (json.legalStatusOfSupply !== undefined) {
      newInstance.legalStatusOfSupply = CodeableConcept.parse(json.legalStatusOfSupply);
    }
    if (json.additionalMonitoringIndicator !== undefined) {
      newInstance.additionalMonitoringIndicator = CodeableConcept.parse(json.additionalMonitoringIndicator);
    }
    if (json.specialMeasures !== undefined) {
      newInstance.specialMeasures = json.specialMeasures.map((x, i) => {
        const ext = json._specialMeasures && json._specialMeasures[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.paediatricUseIndicator !== undefined) {
      newInstance.paediatricUseIndicator = CodeableConcept.parse(json.paediatricUseIndicator);
    }
    if (json.productClassification !== undefined) {
      newInstance.productClassification = json.productClassification.map((x) => CodeableConcept.parse(x));
    }
    if (json.marketingStatus !== undefined) {
      newInstance.marketingStatus = json.marketingStatus.map((x) => MarketingStatus.parse(x));
    }
    if (json.pharmaceuticalProduct !== undefined) {
      newInstance.pharmaceuticalProduct = json.pharmaceuticalProduct.map((x) => Reference.parse(x));
    }
    if (json.packagedMedicinalProduct !== undefined) {
      newInstance.packagedMedicinalProduct = json.packagedMedicinalProduct.map((x) => Reference.parse(x));
    }
    if (json.attachedDocument !== undefined) {
      newInstance.attachedDocument = json.attachedDocument.map((x) => Reference.parse(x));
    }
    if (json.masterFile !== undefined) {
      newInstance.masterFile = json.masterFile.map((x) => Reference.parse(x));
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => Reference.parse(x));
    }
    if (json.clinicalTrial !== undefined) {
      newInstance.clinicalTrial = json.clinicalTrial.map((x) => Reference.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = json.name.map((x) => MedicinalProductName.parse(x));
    }
    if (json.crossReference !== undefined) {
      newInstance.crossReference = json.crossReference.map((x) => Identifier.parse(x));
    }
    if (json.manufacturingBusinessOperation !== undefined) {
      newInstance.manufacturingBusinessOperation = json.manufacturingBusinessOperation.map((x) => MedicinalProductManufacturingBusinessOperation.parse(x));
    }
    if (json.specialDesignation !== undefined) {
      newInstance.specialDesignation = json.specialDesignation.map((x) => MedicinalProductSpecialDesignation.parse(x));
    }
    return newInstance;
  }

  public static isMedicinalProduct(input?: unknown): input is MedicinalProduct {
    const castInput = input as MedicinalProduct;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProduct";
  }

  public toJSON(): IMedicinalProduct {
    const result: IMedicinalProduct = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.domain) {
      result.domain = this.domain.toJSON();
    }

    if (this.combinedPharmaceuticalDoseForm) {
      result.combinedPharmaceuticalDoseForm = this.combinedPharmaceuticalDoseForm.toJSON();
    }

    if (this.legalStatusOfSupply) {
      result.legalStatusOfSupply = this.legalStatusOfSupply.toJSON();
    }

    if (this.additionalMonitoringIndicator) {
      result.additionalMonitoringIndicator = this.additionalMonitoringIndicator.toJSON();
    }

    if (this.specialMeasures) {
      result.specialMeasures = this.specialMeasures.filter(x => !!x).map(x => x.value) as typeof result.specialMeasures;
      result._specialMeasures = Extension.serializePrimitiveExtensionArray(this.specialMeasures);
    }

    if (this.paediatricUseIndicator) {
      result.paediatricUseIndicator = this.paediatricUseIndicator.toJSON();
    }

    if (this.productClassification) {
      result.productClassification = this.productClassification.map((x) => x.toJSON());
    }

    if (this.marketingStatus) {
      result.marketingStatus = this.marketingStatus.map((x) => x.toJSON());
    }

    if (this.pharmaceuticalProduct) {
      result.pharmaceuticalProduct = this.pharmaceuticalProduct.map((x) => x.toJSON());
    }

    if (this.packagedMedicinalProduct) {
      result.packagedMedicinalProduct = this.packagedMedicinalProduct.map((x) => x.toJSON());
    }

    if (this.attachedDocument) {
      result.attachedDocument = this.attachedDocument.map((x) => x.toJSON());
    }

    if (this.masterFile) {
      result.masterFile = this.masterFile.map((x) => x.toJSON());
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.clinicalTrial) {
      result.clinicalTrial = this.clinicalTrial.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.map((x) => x.toJSON());
    }

    if (this.crossReference) {
      result.crossReference = this.crossReference.map((x) => x.toJSON());
    }

    if (this.manufacturingBusinessOperation) {
      result.manufacturingBusinessOperation = this.manufacturingBusinessOperation.map((x) => x.toJSON());
    }

    if (this.specialDesignation) {
      result.specialDesignation = this.specialDesignation.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MedicinalProduct {
    return MedicinalProduct.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProduct";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
