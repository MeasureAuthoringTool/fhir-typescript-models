/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  ICodeableConcept,
  IDomainResource,
  IElement,
  IMedicationKnowledgeAdministrationGuidelines,
  IMedicationKnowledgeCost,
  IMedicationKnowledgeDrugCharacteristic,
  IMedicationKnowledgeIngredient,
  IMedicationKnowledgeKinetics,
  IMedicationKnowledgeMedicineClassification,
  IMedicationKnowledgeMonitoringProgram,
  IMedicationKnowledgeMonograph,
  IMedicationKnowledgePackaging,
  IMedicationKnowledgeRegulatory,
  IMedicationKnowledgeRelatedMedicationKnowledge,
  IMedicationKnowledgeStatus,
  IPrimitiveMarkdown,
  IPrimitiveString,
  IReference,
  ISimpleQuantity,
} from "../internal";

export interface IMedicationKnowledge extends IDomainResource {
  code?: ICodeableConcept;

  status?: IMedicationKnowledgeStatus;
  _status?: IElement;

  manufacturer?: IReference;

  doseForm?: ICodeableConcept;

  amount?: ISimpleQuantity;

  synonym?: Array<IPrimitiveString>;
  _synonym?: Array<IElement | null>;

  relatedMedicationKnowledge?: Array<IMedicationKnowledgeRelatedMedicationKnowledge>;

  associatedMedication?: Array<IReference>;

  productType?: Array<ICodeableConcept>;

  monograph?: Array<IMedicationKnowledgeMonograph>;

  ingredient?: Array<IMedicationKnowledgeIngredient>;

  preparationInstruction?: IPrimitiveMarkdown;
  _preparationInstruction?: IElement;

  intendedRoute?: Array<ICodeableConcept>;

  cost?: Array<IMedicationKnowledgeCost>;

  monitoringProgram?: Array<IMedicationKnowledgeMonitoringProgram>;

  administrationGuidelines?: Array<IMedicationKnowledgeAdministrationGuidelines>;

  medicineClassification?: Array<IMedicationKnowledgeMedicineClassification>;

  packaging?: IMedicationKnowledgePackaging;

  drugCharacteristic?: Array<IMedicationKnowledgeDrugCharacteristic>;

  contraindication?: Array<IReference>;

  regulatory?: Array<IMedicationKnowledgeRegulatory>;

  kinetics?: Array<IMedicationKnowledgeKinetics>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
