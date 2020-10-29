/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Resource,
  IBinary,
  IBundle,
  IDomainResource,
  IParameters,
  IAccount,
  IActivityDefinition,
  IAdverseEvent,
  IAllergyIntolerance,
  IAppointment,
  IAppointmentResponse,
  IAuditEvent,
  IBasic,
  IBiologicallyDerivedProduct,
  IBodyStructure,
  ICapabilityStatement,
  ICarePlan,
  ICareTeam,
  ICatalogEntry,
  IChargeItem,
  IChargeItemDefinition,
  IClaim,
  IClaimResponse,
  IClinicalImpression,
  ICodeSystem,
  ICommunication,
  ICommunicationRequest,
  ICompartmentDefinition,
  IComposition,
  IConceptMap,
  ICondition,
  IConsent,
  IContract,
  ICoverage,
  ICoverageEligibilityRequest,
  ICoverageEligibilityResponse,
  IDetectedIssue,
  IDevice,
  IDeviceDefinition,
  IDeviceMetric,
  IDeviceRequest,
  IDeviceUseStatement,
  IDiagnosticReport,
  IDocumentManifest,
  IDocumentReference,
  IEffectEvidenceSynthesis,
  IEncounter,
  IEndpoint,
  IEnrollmentRequest,
  IEnrollmentResponse,
  IEpisodeOfCare,
  IEventDefinition,
  IEvidence,
  IEvidenceVariable,
  IExampleScenario,
  IExplanationOfBenefit,
  IFamilyMemberHistory,
  IFlag,
  IGoal,
  IGraphDefinition,
  IGroup,
  IGuidanceResponse,
  IHealthcareService,
  IImagingStudy,
  IImmunization,
  IImmunizationEvaluation,
  IImmunizationRecommendation,
  IImplementationGuide,
  IInsurancePlan,
  IInvoice,
  ILibrary,
  ILinkage,
  IList,
  ILocation,
  IMeasure,
  IMeasureReport,
  IMedia,
  IMedication,
  IMedicationAdministration,
  IMedicationDispense,
  IMedicationKnowledge,
  IMedicationRequest,
  IMedicationStatement,
  IMedicinalProduct,
  IMedicinalProductAuthorization,
  IMedicinalProductContraindication,
  IMedicinalProductIndication,
  IMedicinalProductIngredient,
  IMedicinalProductInteraction,
  IMedicinalProductManufactured,
  IMedicinalProductPackaged,
  IMedicinalProductPharmaceutical,
  IMedicinalProductUndesirableEffect,
  IMessageDefinition,
  IMessageHeader,
  IMolecularSequence,
  INamingSystem,
  INutritionOrder,
  IObservation,
  IObservationDefinition,
  IOperationDefinition,
  IOperationOutcome,
  IOrganization,
  IOrganizationAffiliation,
  IPatient,
  IPaymentNotice,
  IPaymentReconciliation,
  IPerson,
  IPlanDefinition,
  IPractitioner,
  IPractitionerRole,
  IProcedure,
  IProvenance,
  IQuestionnaire,
  IQuestionnaireResponse,
  IRelatedPerson,
  IRequestGroup,
  IResearchDefinition,
  IResearchElementDefinition,
  IResearchStudy,
  IResearchSubject,
  IRiskAssessment,
  IRiskEvidenceSynthesis,
  ISchedule,
  ISearchParameter,
  IServiceRequest,
  ISlot,
  ISpecimen,
  ISpecimenDefinition,
  IStructureDefinition,
  IStructureMap,
  ISubscription,
  ISubstance,
  ISubstanceNucleicAcid,
  ISubstancePolymer,
  ISubstanceProtein,
  ISubstanceReferenceInformation,
  ISubstanceSourceMaterial,
  ISubstanceSpecification,
  ISupplyDelivery,
  ISupplyRequest,
  ITask,
  ITerminologyCapabilities,
  ITestReport,
  ITestScript,
  IValueSet,
  IVerificationResult,
  IVisionPrescription,
  Binary,
  Bundle,
  DomainResource,
  Parameters,
  Account,
  ActivityDefinition,
  AdverseEvent,
  AllergyIntolerance,
  Appointment,
  AppointmentResponse,
  AuditEvent,
  Basic,
  BiologicallyDerivedProduct,
  BodyStructure,
  CapabilityStatement,
  CarePlan,
  CareTeam,
  CatalogEntry,
  ChargeItem,
  ChargeItemDefinition,
  Claim,
  ClaimResponse,
  ClinicalImpression,
  CodeSystem,
  Communication,
  CommunicationRequest,
  CompartmentDefinition,
  Composition,
  ConceptMap,
  Condition,
  Consent,
  Contract,
  Coverage,
  CoverageEligibilityRequest,
  CoverageEligibilityResponse,
  DetectedIssue,
  Device,
  DeviceDefinition,
  DeviceMetric,
  DeviceRequest,
  DeviceUseStatement,
  DiagnosticReport,
  DocumentManifest,
  DocumentReference,
  EffectEvidenceSynthesis,
  Encounter,
  Endpoint,
  EnrollmentRequest,
  EnrollmentResponse,
  EpisodeOfCare,
  EventDefinition,
  Evidence,
  EvidenceVariable,
  ExampleScenario,
  ExplanationOfBenefit,
  FamilyMemberHistory,
  Flag,
  Goal,
  GraphDefinition,
  Group,
  GuidanceResponse,
  HealthcareService,
  ImagingStudy,
  Immunization,
  ImmunizationEvaluation,
  ImmunizationRecommendation,
  ImplementationGuide,
  InsurancePlan,
  Invoice,
  Library,
  Linkage,
  List,
  Location,
  Measure,
  MeasureReport,
  Media,
  Medication,
  MedicationAdministration,
  MedicationDispense,
  MedicationKnowledge,
  MedicationRequest,
  MedicationStatement,
  MedicinalProduct,
  MedicinalProductAuthorization,
  MedicinalProductContraindication,
  MedicinalProductIndication,
  MedicinalProductIngredient,
  MedicinalProductInteraction,
  MedicinalProductManufactured,
  MedicinalProductPackaged,
  MedicinalProductPharmaceutical,
  MedicinalProductUndesirableEffect,
  MessageDefinition,
  MessageHeader,
  MolecularSequence,
  NamingSystem,
  NutritionOrder,
  Observation,
  ObservationDefinition,
  OperationDefinition,
  OperationOutcome,
  Organization,
  OrganizationAffiliation,
  Patient,
  PaymentNotice,
  PaymentReconciliation,
  Person,
  PlanDefinition,
  Practitioner,
  PractitionerRole,
  Procedure,
  Provenance,
  Questionnaire,
  QuestionnaireResponse,
  RelatedPerson,
  RequestGroup,
  ResearchDefinition,
  ResearchElementDefinition,
  ResearchStudy,
  ResearchSubject,
  RiskAssessment,
  RiskEvidenceSynthesis,
  Schedule,
  SearchParameter,
  ServiceRequest,
  Slot,
  Specimen,
  SpecimenDefinition,
  StructureDefinition,
  StructureMap,
  Subscription,
  Substance,
  SubstanceNucleicAcid,
  SubstancePolymer,
  SubstanceProtein,
  SubstanceReferenceInformation,
  SubstanceSourceMaterial,
  SubstanceSpecification,
  SupplyDelivery,
  SupplyRequest,
  Task,
  TerminologyCapabilities,
  TestReport,
  TestScript,
  ValueSet,
  VerificationResult,
  VisionPrescription,
} from "./internal";

const resourceBundle: Record<string, typeof Resource> = {
  "Binary": Binary,
  "Bundle": Bundle,
  "DomainResource": DomainResource,
  "Parameters": Parameters,
  "Account": Account,
  "ActivityDefinition": ActivityDefinition,
  "AdverseEvent": AdverseEvent,
  "AllergyIntolerance": AllergyIntolerance,
  "Appointment": Appointment,
  "AppointmentResponse": AppointmentResponse,
  "AuditEvent": AuditEvent,
  "Basic": Basic,
  "BiologicallyDerivedProduct": BiologicallyDerivedProduct,
  "BodyStructure": BodyStructure,
  "CapabilityStatement": CapabilityStatement,
  "CarePlan": CarePlan,
  "CareTeam": CareTeam,
  "CatalogEntry": CatalogEntry,
  "ChargeItem": ChargeItem,
  "ChargeItemDefinition": ChargeItemDefinition,
  "Claim": Claim,
  "ClaimResponse": ClaimResponse,
  "ClinicalImpression": ClinicalImpression,
  "CodeSystem": CodeSystem,
  "Communication": Communication,
  "CommunicationRequest": CommunicationRequest,
  "CompartmentDefinition": CompartmentDefinition,
  "Composition": Composition,
  "ConceptMap": ConceptMap,
  "Condition": Condition,
  "Consent": Consent,
  "Contract": Contract,
  "Coverage": Coverage,
  "CoverageEligibilityRequest": CoverageEligibilityRequest,
  "CoverageEligibilityResponse": CoverageEligibilityResponse,
  "DetectedIssue": DetectedIssue,
  "Device": Device,
  "DeviceDefinition": DeviceDefinition,
  "DeviceMetric": DeviceMetric,
  "DeviceRequest": DeviceRequest,
  "DeviceUseStatement": DeviceUseStatement,
  "DiagnosticReport": DiagnosticReport,
  "DocumentManifest": DocumentManifest,
  "DocumentReference": DocumentReference,
  "EffectEvidenceSynthesis": EffectEvidenceSynthesis,
  "Encounter": Encounter,
  "Endpoint": Endpoint,
  "EnrollmentRequest": EnrollmentRequest,
  "EnrollmentResponse": EnrollmentResponse,
  "EpisodeOfCare": EpisodeOfCare,
  "EventDefinition": EventDefinition,
  "Evidence": Evidence,
  "EvidenceVariable": EvidenceVariable,
  "ExampleScenario": ExampleScenario,
  "ExplanationOfBenefit": ExplanationOfBenefit,
  "FamilyMemberHistory": FamilyMemberHistory,
  "Flag": Flag,
  "Goal": Goal,
  "GraphDefinition": GraphDefinition,
  "Group": Group,
  "GuidanceResponse": GuidanceResponse,
  "HealthcareService": HealthcareService,
  "ImagingStudy": ImagingStudy,
  "Immunization": Immunization,
  "ImmunizationEvaluation": ImmunizationEvaluation,
  "ImmunizationRecommendation": ImmunizationRecommendation,
  "ImplementationGuide": ImplementationGuide,
  "InsurancePlan": InsurancePlan,
  "Invoice": Invoice,
  "Library": Library,
  "Linkage": Linkage,
  "List": List,
  "Location": Location,
  "Measure": Measure,
  "MeasureReport": MeasureReport,
  "Media": Media,
  "Medication": Medication,
  "MedicationAdministration": MedicationAdministration,
  "MedicationDispense": MedicationDispense,
  "MedicationKnowledge": MedicationKnowledge,
  "MedicationRequest": MedicationRequest,
  "MedicationStatement": MedicationStatement,
  "MedicinalProduct": MedicinalProduct,
  "MedicinalProductAuthorization": MedicinalProductAuthorization,
  "MedicinalProductContraindication": MedicinalProductContraindication,
  "MedicinalProductIndication": MedicinalProductIndication,
  "MedicinalProductIngredient": MedicinalProductIngredient,
  "MedicinalProductInteraction": MedicinalProductInteraction,
  "MedicinalProductManufactured": MedicinalProductManufactured,
  "MedicinalProductPackaged": MedicinalProductPackaged,
  "MedicinalProductPharmaceutical": MedicinalProductPharmaceutical,
  "MedicinalProductUndesirableEffect": MedicinalProductUndesirableEffect,
  "MessageDefinition": MessageDefinition,
  "MessageHeader": MessageHeader,
  "MolecularSequence": MolecularSequence,
  "NamingSystem": NamingSystem,
  "NutritionOrder": NutritionOrder,
  "Observation": Observation,
  "ObservationDefinition": ObservationDefinition,
  "OperationDefinition": OperationDefinition,
  "OperationOutcome": OperationOutcome,
  "Organization": Organization,
  "OrganizationAffiliation": OrganizationAffiliation,
  "Patient": Patient,
  "PaymentNotice": PaymentNotice,
  "PaymentReconciliation": PaymentReconciliation,
  "Person": Person,
  "PlanDefinition": PlanDefinition,
  "Practitioner": Practitioner,
  "PractitionerRole": PractitionerRole,
  "Procedure": Procedure,
  "Provenance": Provenance,
  "Questionnaire": Questionnaire,
  "QuestionnaireResponse": QuestionnaireResponse,
  "RelatedPerson": RelatedPerson,
  "RequestGroup": RequestGroup,
  "ResearchDefinition": ResearchDefinition,
  "ResearchElementDefinition": ResearchElementDefinition,
  "ResearchStudy": ResearchStudy,
  "ResearchSubject": ResearchSubject,
  "RiskAssessment": RiskAssessment,
  "RiskEvidenceSynthesis": RiskEvidenceSynthesis,
  "Schedule": Schedule,
  "SearchParameter": SearchParameter,
  "ServiceRequest": ServiceRequest,
  "Slot": Slot,
  "Specimen": Specimen,
  "SpecimenDefinition": SpecimenDefinition,
  "StructureDefinition": StructureDefinition,
  "StructureMap": StructureMap,
  "Subscription": Subscription,
  "Substance": Substance,
  "SubstanceNucleicAcid": SubstanceNucleicAcid,
  "SubstancePolymer": SubstancePolymer,
  "SubstanceProtein": SubstanceProtein,
  "SubstanceReferenceInformation": SubstanceReferenceInformation,
  "SubstanceSourceMaterial": SubstanceSourceMaterial,
  "SubstanceSpecification": SubstanceSpecification,
  "SupplyDelivery": SupplyDelivery,
  "SupplyRequest": SupplyRequest,
  "Task": Task,
  "TerminologyCapabilities": TerminologyCapabilities,
  "TestReport": TestReport,
  "TestScript": TestScript,
  "ValueSet": ValueSet,
  "VerificationResult": VerificationResult,
  "VisionPrescription": VisionPrescription
};

export type AnyResource =
  IBinary |
  IBundle |
  IDomainResource |
  IParameters |
  IAccount |
  IActivityDefinition |
  IAdverseEvent |
  IAllergyIntolerance |
  IAppointment |
  IAppointmentResponse |
  IAuditEvent |
  IBasic |
  IBiologicallyDerivedProduct |
  IBodyStructure |
  ICapabilityStatement |
  ICarePlan |
  ICareTeam |
  ICatalogEntry |
  IChargeItem |
  IChargeItemDefinition |
  IClaim |
  IClaimResponse |
  IClinicalImpression |
  ICodeSystem |
  ICommunication |
  ICommunicationRequest |
  ICompartmentDefinition |
  IComposition |
  IConceptMap |
  ICondition |
  IConsent |
  IContract |
  ICoverage |
  ICoverageEligibilityRequest |
  ICoverageEligibilityResponse |
  IDetectedIssue |
  IDevice |
  IDeviceDefinition |
  IDeviceMetric |
  IDeviceRequest |
  IDeviceUseStatement |
  IDiagnosticReport |
  IDocumentManifest |
  IDocumentReference |
  IEffectEvidenceSynthesis |
  IEncounter |
  IEndpoint |
  IEnrollmentRequest |
  IEnrollmentResponse |
  IEpisodeOfCare |
  IEventDefinition |
  IEvidence |
  IEvidenceVariable |
  IExampleScenario |
  IExplanationOfBenefit |
  IFamilyMemberHistory |
  IFlag |
  IGoal |
  IGraphDefinition |
  IGroup |
  IGuidanceResponse |
  IHealthcareService |
  IImagingStudy |
  IImmunization |
  IImmunizationEvaluation |
  IImmunizationRecommendation |
  IImplementationGuide |
  IInsurancePlan |
  IInvoice |
  ILibrary |
  ILinkage |
  IList |
  ILocation |
  IMeasure |
  IMeasureReport |
  IMedia |
  IMedication |
  IMedicationAdministration |
  IMedicationDispense |
  IMedicationKnowledge |
  IMedicationRequest |
  IMedicationStatement |
  IMedicinalProduct |
  IMedicinalProductAuthorization |
  IMedicinalProductContraindication |
  IMedicinalProductIndication |
  IMedicinalProductIngredient |
  IMedicinalProductInteraction |
  IMedicinalProductManufactured |
  IMedicinalProductPackaged |
  IMedicinalProductPharmaceutical |
  IMedicinalProductUndesirableEffect |
  IMessageDefinition |
  IMessageHeader |
  IMolecularSequence |
  INamingSystem |
  INutritionOrder |
  IObservation |
  IObservationDefinition |
  IOperationDefinition |
  IOperationOutcome |
  IOrganization |
  IOrganizationAffiliation |
  IPatient |
  IPaymentNotice |
  IPaymentReconciliation |
  IPerson |
  IPlanDefinition |
  IPractitioner |
  IPractitionerRole |
  IProcedure |
  IProvenance |
  IQuestionnaire |
  IQuestionnaireResponse |
  IRelatedPerson |
  IRequestGroup |
  IResearchDefinition |
  IResearchElementDefinition |
  IResearchStudy |
  IResearchSubject |
  IRiskAssessment |
  IRiskEvidenceSynthesis |
  ISchedule |
  ISearchParameter |
  IServiceRequest |
  ISlot |
  ISpecimen |
  ISpecimenDefinition |
  IStructureDefinition |
  IStructureMap |
  ISubscription |
  ISubstance |
  ISubstanceNucleicAcid |
  ISubstancePolymer |
  ISubstanceProtein |
  ISubstanceReferenceInformation |
  ISubstanceSourceMaterial |
  ISubstanceSpecification |
  ISupplyDelivery |
  ISupplyRequest |
  ITask |
  ITerminologyCapabilities |
  ITestReport |
  ITestScript |
  IValueSet |
  IVerificationResult |
  IVisionPrescription;

export function lookupResourceType(typeName: string): typeof Resource | undefined {
  return resourceBundle[typeName];
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
