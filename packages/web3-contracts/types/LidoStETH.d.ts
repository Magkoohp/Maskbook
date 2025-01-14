/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from 'bn.js'
import type { ContractOptions } from 'web3-eth-contract'
import type { EventLog } from 'web3-core'
import type { EventEmitter } from 'events'
import type {
    Callback,
    PayableTransactionObject,
    NonPayableTransactionObject,
    BlockType,
    ContractEventLog,
    BaseContract,
} from './types.js'

export interface EventOptions {
    filter?: object
    fromBlock?: BlockType
    topics?: string[]
}

export type StakingPaused = ContractEventLog<{}>
export type StakingResumed = ContractEventLog<{}>
export type StakingLimitSet = ContractEventLog<{
    maxStakeLimit: string
    stakeLimitIncreasePerBlock: string
    0: string
    1: string
}>
export type StakingLimitRemoved = ContractEventLog<{}>
export type CLValidatorsUpdated = ContractEventLog<{
    reportTimestamp: string
    preCLValidators: string
    postCLValidators: string
    0: string
    1: string
    2: string
}>
export type DepositedValidatorsChanged = ContractEventLog<{
    depositedValidators: string
    0: string
}>
export type ETHDistributed = ContractEventLog<{
    reportTimestamp: string
    preCLBalance: string
    postCLBalance: string
    withdrawalsWithdrawn: string
    executionLayerRewardsWithdrawn: string
    postBufferedEther: string
    0: string
    1: string
    2: string
    3: string
    4: string
    5: string
}>
export type TokenRebased = ContractEventLog<{
    reportTimestamp: string
    timeElapsed: string
    preTotalShares: string
    preTotalEther: string
    postTotalShares: string
    postTotalEther: string
    sharesMintedAsFees: string
    0: string
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
}>
export type LidoLocatorSet = ContractEventLog<{
    lidoLocator: string
    0: string
}>
export type ELRewardsReceived = ContractEventLog<{
    amount: string
    0: string
}>
export type WithdrawalsReceived = ContractEventLog<{
    amount: string
    0: string
}>
export type Submitted = ContractEventLog<{
    sender: string
    amount: string
    referral: string
    0: string
    1: string
    2: string
}>
export type Unbuffered = ContractEventLog<{
    amount: string
    0: string
}>
export type ScriptResult = ContractEventLog<{
    executor: string
    script: string
    input: string
    returnData: string
    0: string
    1: string
    2: string
    3: string
}>
export type RecoverToVault = ContractEventLog<{
    vault: string
    token: string
    amount: string
    0: string
    1: string
    2: string
}>
export type EIP712StETHInitialized = ContractEventLog<{
    eip712StETH: string
    0: string
}>
export type TransferShares = ContractEventLog<{
    from: string
    to: string
    sharesValue: string
    0: string
    1: string
    2: string
}>
export type SharesBurnt = ContractEventLog<{
    account: string
    preRebaseTokenAmount: string
    postRebaseTokenAmount: string
    sharesAmount: string
    0: string
    1: string
    2: string
    3: string
}>
export type Stopped = ContractEventLog<{}>
export type Resumed = ContractEventLog<{}>
export type Transfer = ContractEventLog<{
    from: string
    to: string
    value: string
    0: string
    1: string
    2: string
}>
export type Approval = ContractEventLog<{
    owner: string
    spender: string
    value: string
    0: string
    1: string
    2: string
}>
export type ContractVersionSet = ContractEventLog<{
    version: string
    0: string
}>

export interface LidoStETH extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): LidoStETH
    clone(): LidoStETH
    methods: {
        resume(): NonPayableTransactionObject<void>

        name(): NonPayableTransactionObject<string>

        stop(): NonPayableTransactionObject<void>

        hasInitialized(): NonPayableTransactionObject<boolean>

        approve(_spender: string, _amount: number | string | BN): NonPayableTransactionObject<boolean>

        STAKING_CONTROL_ROLE(): NonPayableTransactionObject<string>

        totalSupply(): NonPayableTransactionObject<string>

        getSharesByPooledEth(_ethAmount: number | string | BN): NonPayableTransactionObject<string>

        isStakingPaused(): NonPayableTransactionObject<boolean>

        transferFrom(
            _sender: string,
            _recipient: string,
            _amount: number | string | BN,
        ): NonPayableTransactionObject<boolean>

        getEVMScriptExecutor(_script: string | number[]): NonPayableTransactionObject<string>

        setStakingLimit(
            _maxStakeLimit: number | string | BN,
            _stakeLimitIncreasePerBlock: number | string | BN,
        ): NonPayableTransactionObject<void>

        RESUME_ROLE(): NonPayableTransactionObject<string>

        finalizeUpgrade_v2(_lidoLocator: string, _eip712StETH: string): NonPayableTransactionObject<void>

        decimals(): NonPayableTransactionObject<string>

        getRecoveryVault(): NonPayableTransactionObject<string>

        DOMAIN_SEPARATOR(): NonPayableTransactionObject<string>

        getTotalPooledEther(): NonPayableTransactionObject<string>

        unsafeChangeDepositedValidators(
            _newDepositedValidators: number | string | BN,
        ): NonPayableTransactionObject<void>

        PAUSE_ROLE(): NonPayableTransactionObject<string>

        increaseAllowance(_spender: string, _addedValue: number | string | BN): NonPayableTransactionObject<boolean>

        getTreasury(): NonPayableTransactionObject<string>

        isStopped(): NonPayableTransactionObject<boolean>

        getBufferedEther(): NonPayableTransactionObject<string>

        initialize(_lidoLocator: string, _eip712StETH: string): PayableTransactionObject<void>

        receiveELRewards(): PayableTransactionObject<void>

        getWithdrawalCredentials(): NonPayableTransactionObject<string>

        getCurrentStakeLimit(): NonPayableTransactionObject<string>

        getStakeLimitFullInfo(): NonPayableTransactionObject<{
            isStakingPaused: boolean
            isStakingLimitSet: boolean
            currentStakeLimit: string
            maxStakeLimit: string
            maxStakeLimitGrowthBlocks: string
            prevStakeLimit: string
            prevStakeBlockNumber: string
            0: boolean
            1: boolean
            2: string
            3: string
            4: string
            5: string
            6: string
        }>

        transferSharesFrom(
            _sender: string,
            _recipient: string,
            _sharesAmount: number | string | BN,
        ): NonPayableTransactionObject<string>

        balanceOf(_account: string): NonPayableTransactionObject<string>

        resumeStaking(): NonPayableTransactionObject<void>

        getFeeDistribution(): NonPayableTransactionObject<{
            treasuryFeeBasisPoints: string
            insuranceFeeBasisPoints: string
            operatorsFeeBasisPoints: string
            0: string
            1: string
            2: string
        }>

        receiveWithdrawals(): PayableTransactionObject<void>

        getPooledEthByShares(_sharesAmount: number | string | BN): NonPayableTransactionObject<string>

        allowRecoverability(token: string): NonPayableTransactionObject<boolean>

        nonces(owner: string): NonPayableTransactionObject<string>

        appId(): NonPayableTransactionObject<string>

        getOracle(): NonPayableTransactionObject<string>

        eip712Domain(): NonPayableTransactionObject<{
            name: string
            version: string
            chainId: string
            verifyingContract: string
            0: string
            1: string
            2: string
            3: string
        }>

        getContractVersion(): NonPayableTransactionObject<string>

        getInitializationBlock(): NonPayableTransactionObject<string>

        transferShares(_recipient: string, _sharesAmount: number | string | BN): NonPayableTransactionObject<string>

        symbol(): NonPayableTransactionObject<string>

        getEIP712StETH(): NonPayableTransactionObject<string>

        transferToVault(arg0: string): NonPayableTransactionObject<void>

        canPerform(
            _sender: string,
            _role: string | number[],
            _params: (number | string | BN)[],
        ): NonPayableTransactionObject<boolean>

        submit(_referral: string): PayableTransactionObject<string>

        decreaseAllowance(
            _spender: string,
            _subtractedValue: number | string | BN,
        ): NonPayableTransactionObject<boolean>

        getEVMScriptRegistry(): NonPayableTransactionObject<string>

        transfer(_recipient: string, _amount: number | string | BN): NonPayableTransactionObject<boolean>

        deposit(
            _maxDepositsCount: number | string | BN,
            _stakingModuleId: number | string | BN,
            _depositCalldata: string | number[],
        ): NonPayableTransactionObject<void>

        UNSAFE_CHANGE_DEPOSITED_VALIDATORS_ROLE(): NonPayableTransactionObject<string>

        getBeaconStat(): NonPayableTransactionObject<{
            depositedValidators: string
            beaconValidators: string
            beaconBalance: string
            0: string
            1: string
            2: string
        }>

        removeStakingLimit(): NonPayableTransactionObject<void>

        handleOracleReport(
            _reportTimestamp: number | string | BN,
            _timeElapsed: number | string | BN,
            _clValidators: number | string | BN,
            _clBalance: number | string | BN,
            _withdrawalVaultBalance: number | string | BN,
            _elRewardsVaultBalance: number | string | BN,
            _sharesRequestedToBurn: number | string | BN,
            _withdrawalFinalizationBatches: (number | string | BN)[],
            _simulatedShareRate: number | string | BN,
        ): NonPayableTransactionObject<string[]>

        getFee(): NonPayableTransactionObject<string>

        kernel(): NonPayableTransactionObject<string>

        getTotalShares(): NonPayableTransactionObject<string>

        permit(
            _owner: string,
            _spender: string,
            _value: number | string | BN,
            _deadline: number | string | BN,
            _v: number | string | BN,
            _r: string | number[],
            _s: string | number[],
        ): NonPayableTransactionObject<void>

        allowance(_owner: string, _spender: string): NonPayableTransactionObject<string>

        isPetrified(): NonPayableTransactionObject<boolean>

        getLidoLocator(): NonPayableTransactionObject<string>

        canDeposit(): NonPayableTransactionObject<boolean>

        STAKING_PAUSE_ROLE(): NonPayableTransactionObject<string>

        getDepositableEther(): NonPayableTransactionObject<string>

        sharesOf(_account: string): NonPayableTransactionObject<string>

        pauseStaking(): NonPayableTransactionObject<void>

        getTotalELRewardsCollected(): NonPayableTransactionObject<string>
    }
    events: {
        StakingPaused(cb?: Callback<StakingPaused>): EventEmitter
        StakingPaused(options?: EventOptions, cb?: Callback<StakingPaused>): EventEmitter

        StakingResumed(cb?: Callback<StakingResumed>): EventEmitter
        StakingResumed(options?: EventOptions, cb?: Callback<StakingResumed>): EventEmitter

        StakingLimitSet(cb?: Callback<StakingLimitSet>): EventEmitter
        StakingLimitSet(options?: EventOptions, cb?: Callback<StakingLimitSet>): EventEmitter

        StakingLimitRemoved(cb?: Callback<StakingLimitRemoved>): EventEmitter
        StakingLimitRemoved(options?: EventOptions, cb?: Callback<StakingLimitRemoved>): EventEmitter

        CLValidatorsUpdated(cb?: Callback<CLValidatorsUpdated>): EventEmitter
        CLValidatorsUpdated(options?: EventOptions, cb?: Callback<CLValidatorsUpdated>): EventEmitter

        DepositedValidatorsChanged(cb?: Callback<DepositedValidatorsChanged>): EventEmitter
        DepositedValidatorsChanged(options?: EventOptions, cb?: Callback<DepositedValidatorsChanged>): EventEmitter

        ETHDistributed(cb?: Callback<ETHDistributed>): EventEmitter
        ETHDistributed(options?: EventOptions, cb?: Callback<ETHDistributed>): EventEmitter

        TokenRebased(cb?: Callback<TokenRebased>): EventEmitter
        TokenRebased(options?: EventOptions, cb?: Callback<TokenRebased>): EventEmitter

        LidoLocatorSet(cb?: Callback<LidoLocatorSet>): EventEmitter
        LidoLocatorSet(options?: EventOptions, cb?: Callback<LidoLocatorSet>): EventEmitter

        ELRewardsReceived(cb?: Callback<ELRewardsReceived>): EventEmitter
        ELRewardsReceived(options?: EventOptions, cb?: Callback<ELRewardsReceived>): EventEmitter

        WithdrawalsReceived(cb?: Callback<WithdrawalsReceived>): EventEmitter
        WithdrawalsReceived(options?: EventOptions, cb?: Callback<WithdrawalsReceived>): EventEmitter

        Submitted(cb?: Callback<Submitted>): EventEmitter
        Submitted(options?: EventOptions, cb?: Callback<Submitted>): EventEmitter

        Unbuffered(cb?: Callback<Unbuffered>): EventEmitter
        Unbuffered(options?: EventOptions, cb?: Callback<Unbuffered>): EventEmitter

        ScriptResult(cb?: Callback<ScriptResult>): EventEmitter
        ScriptResult(options?: EventOptions, cb?: Callback<ScriptResult>): EventEmitter

        RecoverToVault(cb?: Callback<RecoverToVault>): EventEmitter
        RecoverToVault(options?: EventOptions, cb?: Callback<RecoverToVault>): EventEmitter

        EIP712StETHInitialized(cb?: Callback<EIP712StETHInitialized>): EventEmitter
        EIP712StETHInitialized(options?: EventOptions, cb?: Callback<EIP712StETHInitialized>): EventEmitter

        TransferShares(cb?: Callback<TransferShares>): EventEmitter
        TransferShares(options?: EventOptions, cb?: Callback<TransferShares>): EventEmitter

        SharesBurnt(cb?: Callback<SharesBurnt>): EventEmitter
        SharesBurnt(options?: EventOptions, cb?: Callback<SharesBurnt>): EventEmitter

        Stopped(cb?: Callback<Stopped>): EventEmitter
        Stopped(options?: EventOptions, cb?: Callback<Stopped>): EventEmitter

        Resumed(cb?: Callback<Resumed>): EventEmitter
        Resumed(options?: EventOptions, cb?: Callback<Resumed>): EventEmitter

        Transfer(cb?: Callback<Transfer>): EventEmitter
        Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter

        Approval(cb?: Callback<Approval>): EventEmitter
        Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter

        ContractVersionSet(cb?: Callback<ContractVersionSet>): EventEmitter
        ContractVersionSet(options?: EventOptions, cb?: Callback<ContractVersionSet>): EventEmitter

        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter
    }

    once(event: 'StakingPaused', cb: Callback<StakingPaused>): void
    once(event: 'StakingPaused', options: EventOptions, cb: Callback<StakingPaused>): void

    once(event: 'StakingResumed', cb: Callback<StakingResumed>): void
    once(event: 'StakingResumed', options: EventOptions, cb: Callback<StakingResumed>): void

    once(event: 'StakingLimitSet', cb: Callback<StakingLimitSet>): void
    once(event: 'StakingLimitSet', options: EventOptions, cb: Callback<StakingLimitSet>): void

    once(event: 'StakingLimitRemoved', cb: Callback<StakingLimitRemoved>): void
    once(event: 'StakingLimitRemoved', options: EventOptions, cb: Callback<StakingLimitRemoved>): void

    once(event: 'CLValidatorsUpdated', cb: Callback<CLValidatorsUpdated>): void
    once(event: 'CLValidatorsUpdated', options: EventOptions, cb: Callback<CLValidatorsUpdated>): void

    once(event: 'DepositedValidatorsChanged', cb: Callback<DepositedValidatorsChanged>): void
    once(event: 'DepositedValidatorsChanged', options: EventOptions, cb: Callback<DepositedValidatorsChanged>): void

    once(event: 'ETHDistributed', cb: Callback<ETHDistributed>): void
    once(event: 'ETHDistributed', options: EventOptions, cb: Callback<ETHDistributed>): void

    once(event: 'TokenRebased', cb: Callback<TokenRebased>): void
    once(event: 'TokenRebased', options: EventOptions, cb: Callback<TokenRebased>): void

    once(event: 'LidoLocatorSet', cb: Callback<LidoLocatorSet>): void
    once(event: 'LidoLocatorSet', options: EventOptions, cb: Callback<LidoLocatorSet>): void

    once(event: 'ELRewardsReceived', cb: Callback<ELRewardsReceived>): void
    once(event: 'ELRewardsReceived', options: EventOptions, cb: Callback<ELRewardsReceived>): void

    once(event: 'WithdrawalsReceived', cb: Callback<WithdrawalsReceived>): void
    once(event: 'WithdrawalsReceived', options: EventOptions, cb: Callback<WithdrawalsReceived>): void

    once(event: 'Submitted', cb: Callback<Submitted>): void
    once(event: 'Submitted', options: EventOptions, cb: Callback<Submitted>): void

    once(event: 'Unbuffered', cb: Callback<Unbuffered>): void
    once(event: 'Unbuffered', options: EventOptions, cb: Callback<Unbuffered>): void

    once(event: 'ScriptResult', cb: Callback<ScriptResult>): void
    once(event: 'ScriptResult', options: EventOptions, cb: Callback<ScriptResult>): void

    once(event: 'RecoverToVault', cb: Callback<RecoverToVault>): void
    once(event: 'RecoverToVault', options: EventOptions, cb: Callback<RecoverToVault>): void

    once(event: 'EIP712StETHInitialized', cb: Callback<EIP712StETHInitialized>): void
    once(event: 'EIP712StETHInitialized', options: EventOptions, cb: Callback<EIP712StETHInitialized>): void

    once(event: 'TransferShares', cb: Callback<TransferShares>): void
    once(event: 'TransferShares', options: EventOptions, cb: Callback<TransferShares>): void

    once(event: 'SharesBurnt', cb: Callback<SharesBurnt>): void
    once(event: 'SharesBurnt', options: EventOptions, cb: Callback<SharesBurnt>): void

    once(event: 'Stopped', cb: Callback<Stopped>): void
    once(event: 'Stopped', options: EventOptions, cb: Callback<Stopped>): void

    once(event: 'Resumed', cb: Callback<Resumed>): void
    once(event: 'Resumed', options: EventOptions, cb: Callback<Resumed>): void

    once(event: 'Transfer', cb: Callback<Transfer>): void
    once(event: 'Transfer', options: EventOptions, cb: Callback<Transfer>): void

    once(event: 'Approval', cb: Callback<Approval>): void
    once(event: 'Approval', options: EventOptions, cb: Callback<Approval>): void

    once(event: 'ContractVersionSet', cb: Callback<ContractVersionSet>): void
    once(event: 'ContractVersionSet', options: EventOptions, cb: Callback<ContractVersionSet>): void
}
