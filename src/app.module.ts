import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLISODateTime, GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { DonationsModule } from './donations/donations.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLISODateTime },
      cache: 'bounded',
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
    }),
    DonationsModule,
  ],
})
export class AppModule {}
