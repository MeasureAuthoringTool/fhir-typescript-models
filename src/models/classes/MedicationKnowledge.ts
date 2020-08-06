/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  IMedicationKnowledge,
  MedicationKnowledgeAdministrationGuidelines,
  MedicationKnowledgeCost,
  MedicationKnowledgeDrugCharacteristic,
  MedicationKnowledgeIngredient,
  MedicationKnowledgeKinetics,
  MedicationKnowledgeMedicineClassification,
  MedicationKnowledgeMonitoringProgram,
  MedicationKnowledgeMonograph,
  MedicationKnowledgePackaging,
  MedicationKnowledgeRegulatory,
  MedicationKnowledgeRelatedMedicationKnowledge,
  MedicationKnowledgeStatus,
  PrimitiveMarkdown,
  PrimitiveString,
  Reference,
  SimpleQuantity,
} from "../internal";

export class MedicationKnowledge extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicationKnowledge";

  public code?: CodeableConcept;

  public status?: MedicationKnowledgeStatus;

  public manufacturer?: Reference;

  public doseForm?: CodeableConcept;

  public amount?: SimpleQuantity;

  public synonym?: Array<PrimitiveString>;

  public relatedMedicationKnowledge?: Array<MedicationKnowledgeRelatedMedicationKnowledge>;

  public associatedMedication?: Array<Reference>;

  public productType?: Array<CodeableConcept>;

  public monograph?: Array<MedicationKnowledgeMonograph>;

  public ingredient?: Array<MedicationKnowledgeIngredient>;

  public preparationInstruction?: PrimitiveMarkdown;

  public intendedRoute?: Array<CodeableConcept>;

  public cost?: Array<MedicationKnowledgeCost>;

  public monitoringProgram?: Array<MedicationKnowledgeMonitoringProgram>;

  public administrationGuidelines?: Array<MedicationKnowledgeAdministrationGuidelines>;

  public medicineClassification?: Array<MedicationKnowledgeMedicineClassification>;

  public packaging?: MedicationKnowledgePackaging;

  public drugCharacteristic?: Array<MedicationKnowledgeDrugCharacteristic>;

  public contraindication?: Array<Reference>;

  public regulatory?: Array<MedicationKnowledgeRegulatory>;

  public kinetics?: Array<MedicationKnowledgeKinetics>;

  public static parse(
    json: IMedicationKnowledge,
    providedInstance: MedicationKnowledge = new MedicationKnowledge()
  ): MedicationKnowledge {
    const newInstance: MedicationKnowledge = DomainResource.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.status) {
      newInstance.status = MedicationKnowledgeStatus.parsePrimitive(json.status, json._status);
    }
    if (json.manufacturer) {
      newInstance.manufacturer = Reference.parse(json.manufacturer);
    }
    if (json.doseForm) {
      newInstance.doseForm = CodeableConcept.parse(json.doseForm);
    }
    if (json.amount) {
      newInstance.amount = SimpleQuantity.parse(json.amount);
    }
    if (json.synonym) {
      newInstance.synonym = json.synonym.map((x, i) => {
        const ext = json._synonym && json._synonym[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.relatedMedicationKnowledge) {
      newInstance.relatedMedicationKnowledge = json.relatedMedicationKnowledge.map((x) => MedicationKnowledgeRelatedMedicationKnowledge.parse(x));
    }
    if (json.associatedMedication) {
      newInstance.associatedMedication = json.associatedMedication.map((x) => Reference.parse(x));
    }
    if (json.productType) {
      newInstance.productType = json.productType.map((x) => CodeableConcept.parse(x));
    }
    if (json.monograph) {
      newInstance.monograph = json.monograph.map((x) => MedicationKnowledgeMonograph.parse(x));
    }
    if (json.ingredient) {
      newInstance.ingredient = json.ingredient.map((x) => MedicationKnowledgeIngredient.parse(x));
    }
    if (json.preparationInstruction) {
      newInstance.preparationInstruction = PrimitiveMarkdown.parsePrimitive(json.preparationInstruction, json._preparationInstruction);
    }
    if (json.intendedRoute) {
      newInstance.intendedRoute = json.intendedRoute.map((x) => CodeableConcept.parse(x));
    }
    if (json.cost) {
      newInstance.cost = json.cost.map((x) => MedicationKnowledgeCost.parse(x));
    }
    if (json.monitoringProgram) {
      newInstance.monitoringProgram = json.monitoringProgram.map((x) => MedicationKnowledgeMonitoringProgram.parse(x));
    }
    if (json.administrationGuidelines) {
      newInstance.administrationGuidelines = json.administrationGuidelines.map((x) => MedicationKnowledgeAdministrationGuidelines.parse(x));
    }
    if (json.medicineClassification) {
      newInstance.medicineClassification = json.medicineClassification.map((x) => MedicationKnowledgeMedicineClassification.parse(x));
    }
    if (json.packaging) {
      newInstance.packaging = MedicationKnowledgePackaging.parse(json.packaging);
    }
    if (json.drugCharacteristic) {
      newInstance.drugCharacteristic = json.drugCharacteristic.map((x) => MedicationKnowledgeDrugCharacteristic.parse(x));
    }
    if (json.contraindication) {
      newInstance.contraindication = json.contraindication.map((x) => Reference.parse(x));
    }
    if (json.regulatory) {
      newInstance.regulatory = json.regulatory.map((x) => MedicationKnowledgeRegulatory.parse(x));
    }
    if (json.kinetics) {
      newInstance.kinetics = json.kinetics.map((x) => MedicationKnowledgeKinetics.parse(x));
    }
    return newInstance;
  }

  public static isMedicationKnowledge(input?: unknown): input is MedicationKnowledge {
    const castInput = input as MedicationKnowledge;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicationKnowledge";
  }

  public toJSON(): IMedicationKnowledge {
    const result: IMedicationKnowledge = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.manufacturer) {
      result.manufacturer = this.manufacturer.toJSON();
    }

    if (this.doseForm) {
      result.doseForm = this.doseForm.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    if (this.synonym) {
      result.synonym = this.synonym.filter(x => !!x).map(x => x.value) as typeof result.synonym;
      result._synonym = Extension.serializePrimitiveExtensionArray(this.synonym);
    }

    if (this.relatedMedicationKnowledge) {
      result.relatedMedicationKnowledge = this.relatedMedicationKnowledge.map((x) => x.toJSON());
    }

    if (this.associatedMedication) {
      result.associatedMedication = this.associatedMedication.map((x) => x.toJSON());
    }

    if (this.productType) {
      result.productType = this.productType.map((x) => x.toJSON());
    }

    if (this.monograph) {
      result.monograph = this.monograph.map((x) => x.toJSON());
    }

    if (this.ingredient) {
      result.ingredient = this.ingredient.map((x) => x.toJSON());
    }

    if (this.preparationInstruction) {
      result.preparationInstruction = this.preparationInstruction.value;
      result._preparationInstruction = Extension.serializePrimitiveExtension(this.preparationInstruction);
    }

    if (this.intendedRoute) {
      result.intendedRoute = this.intendedRoute.map((x) => x.toJSON());
    }

    if (this.cost) {
      result.cost = this.cost.map((x) => x.toJSON());
    }

    if (this.monitoringProgram) {
      result.monitoringProgram = this.monitoringProgram.map((x) => x.toJSON());
    }

    if (this.administrationGuidelines) {
      result.administrationGuidelines = this.administrationGuidelines.map((x) => x.toJSON());
    }

    if (this.medicineClassification) {
      result.medicineClassification = this.medicineClassification.map((x) => x.toJSON());
    }

    if (this.packaging) {
      result.packaging = this.packaging.toJSON();
    }

    if (this.drugCharacteristic) {
      result.drugCharacteristic = this.drugCharacteristic.map((x) => x.toJSON());
    }

    if (this.contraindication) {
      result.contraindication = this.contraindication.map((x) => x.toJSON());
    }

    if (this.regulatory) {
      result.regulatory = this.regulatory.map((x) => x.toJSON());
    }

    if (this.kinetics) {
      result.kinetics = this.kinetics.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MedicationKnowledge";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
